import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { In, Repository } from 'typeorm';
import { CreateMessageDataDto } from './dto/message/create-message-data.dto';
import { CreateMessageDto } from './dto/message/create-message.dto';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/contact/create-contact.dto';
import { CreateTicketDto } from './dto/ticket/create-ticket.dto';
import { Ticket } from './entities/ticket.entity';
import { Queue } from './entities/queue.entity';
import { User } from './entities/user.entity';
import { Whatsapp } from './entities/whatsapp.entity';
import { CreateQueueDto } from './dto/queue/create-queue.dto';
import { CreateUserDto } from './dto/user/create-user.dto';
import { CreateWhatsappDto } from './dto/whatsapp/create-whatsapp.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class GosacService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
    @InjectRepository(Queue)
    private readonly queueRepository: Repository<Queue>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Whatsapp)
    private readonly whatsappRepository: Repository<Whatsapp>
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<void> {

    const messageData = createMessageDto.data;

    const messageTicketUser = messageData.ticket!.user;
    await this.createUser(messageTicketUser!);
    const messageTicketQueue = messageData.ticket!.queue;
    await this.createQueue(messageTicketQueue!);
    const messageTicketWhatsapp = messageData.ticket!.whatsapp;
    await this.createWhatsapp(messageTicketWhatsapp!);
    const messageContact = messageData.contact;
    await this.createContact(messageContact!);
    const messageTicket = messageData.ticket;
    await this.createTicket(messageTicket!);

    await this.delay(500);

    await this.createMessageData(messageData);
  }

  async createUser(createUserDto: CreateUserDto): Promise<void> {
    const existingUser = await this.userRepository.findOneBy({ id: createUserDto.id });
  
    if (existingUser) {
      const isDataCompatible = Object.keys(createUserDto).every(
        (key) => existingUser[key] === createUserDto[key]
      );
  
      if (!isDataCompatible) {
        await this.userRepository.update(existingUser.id, createUserDto);
        console.log(`Usuário com ID ${existingUser.id} foi atualizado.`);
      } else {
        console.log(`Usuário com ID ${existingUser.id} já existe e os dados são compatíveis.`);
      }
    } else {
      const user = this.userRepository.create(createUserDto);
      await this.userRepository.save(user);
      console.log(`Novo usuário com ID ${createUserDto.id} foi criado.`);
    }
  }

  async createQueue(createQueueDto: CreateQueueDto): Promise<void> {
    const existingQueue = await this.queueRepository.findOneBy({ id: createQueueDto.id });
  
    if (existingQueue) {
      const isDataCompatible = Object.keys(createQueueDto).every(
        (key) => existingQueue[key] === createQueueDto[key]
      );
  
      if (!isDataCompatible) {
        await this.queueRepository.update(existingQueue.id, createQueueDto);
        console.log(`Fila com ID ${existingQueue.id} foi atualizada.`);
      } else {
        console.log(`Fila com ID ${existingQueue.id} já existe e os dados são compatíveis.`);
      }
    } else {
      const queue = this.queueRepository.create(createQueueDto);
      await this.queueRepository.save(queue);
      console.log(`Nova fila com ID ${createQueueDto.id} foi criada.`);
    }
  }

  async createWhatsapp(createWhatsappDto: CreateWhatsappDto): Promise<void> {
    const existingWhatsapp = await this.whatsappRepository.findOneBy({ id: createWhatsappDto.id });
  
    if (existingWhatsapp) {
      const isDataCompatible = Object.keys(createWhatsappDto).every(
        (key) => existingWhatsapp[key] === createWhatsappDto[key]
      );
  
      if (!isDataCompatible) {
        await this.whatsappRepository.update(existingWhatsapp.id, createWhatsappDto);
        console.log(`WhatsApp com ID ${existingWhatsapp.id} foi atualizado.`);
      } else {
        console.log(`WhatsApp com ID ${existingWhatsapp.id} já existe e os dados são compatíveis.`);
      }
    } else {
      const whatsapp = this.whatsappRepository.create(createWhatsappDto);
      await this.whatsappRepository.save(whatsapp);
      console.log(`Novo WhatsApp com ID ${createWhatsappDto.id} foi criado.`);
    }
  }

  async createContact(createContactDto: CreateContactDto): Promise<void> {
    const existingContact = await this.contactRepository.findOneBy({ id: createContactDto.id });
  
    if (existingContact) {
      const isDataCompatible = Object.keys(createContactDto).every(
        (key) => existingContact[key] === createContactDto[key]
      );
  
      if (!isDataCompatible) {
        await this.contactRepository.update(existingContact.id, createContactDto);
        console.log(`Contato com ID ${existingContact.id} foi atualizado.`);
      } else {
        console.log(`Contato com ID ${existingContact.id} já existe e os dados são compatíveis.`);
      }
    } else {
      const contact = plainToInstance(Contact, createContactDto);
      const newContact = this.contactRepository.create(contact);
      await this.contactRepository.save(newContact);
      console.log(`Novo contato com ID ${createContactDto.id} foi criado.`);
    }
  }

  async createTicket(createTicketDto: CreateTicketDto): Promise<void> {

    const user = await this.userRepository.findOneBy({ id: createTicketDto.userId });
    const whatsapp = await this.whatsappRepository.findOneBy({ id: createTicketDto.whatsappId });
    const queue = await this.queueRepository.findOneBy({ id: createTicketDto.queueId });
    const contact = await this.contactRepository.findOneBy({ id: createTicketDto.contactId });

    if (!user) {
      throw new Error(`Usuário com ID ${createTicketDto.userId} não encontrado.`);
    }

    if (!whatsapp) {
      throw new Error(`WhatsApp com ID ${createTicketDto.whatsappId} não encontrado.`);
    }

    if (!queue) {
      throw new Error(`Fila com ID ${createTicketDto.queueId} não encontrada.`);
    }

    if (!contact) {
      throw new Error(`Contato com ID ${createTicketDto.contactId} não encontrado.`);
    }

    const ticket = plainToInstance(Ticket, createTicketDto);
    ticket.user = user;
    ticket.whatsapp = whatsapp;
    ticket.queue = queue;
    ticket.contact = contact;
    const newTicket = this.ticketRepository.create(ticket);
    this.ticketRepository.save(newTicket);
    console.log(`Novo ticket com ID ${createTicketDto.id} foi criado.`);
  }

  async createMessageData(createMessageDataDto: CreateMessageDataDto): Promise<void> {
    const ticket = await this.ticketRepository.findOneBy({ id: createMessageDataDto.ticketId });
    const contact = await this.contactRepository.findOneBy({ id: createMessageDataDto.contactId });

    if (!ticket) {
      throw new Error(`Ticket com ID ${createMessageDataDto.ticketId} não encontrado.`);
    }
  
    if (!contact) {
      throw new Error(`Contato com ID ${createMessageDataDto.contactId} não encontrado.`);
    }

    const messageData = plainToInstance(Message, createMessageDataDto);
    messageData.ticket = ticket;
    messageData.contact = contact;
    const newMessageData = this.messageRepository.create(messageData);
    this.messageRepository.save(newMessageData);
    console.log(`Novo messageData com ID ${createMessageDataDto.id} foi criado.`);
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
