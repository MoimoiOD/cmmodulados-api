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

  async create(createMessageDto: CreateMessageDto): Promise<Message> {

    const messageData = createMessageDto.data;

    const messageContact = messageData.contact;
    await this.createContact(messageContact);
    const messageTicketUser = messageData.ticket.user;
    await this.createUser(messageTicketUser);
    const messageTicketQueue = messageData.ticket.queue;
    await this.createQueue(messageTicketQueue);
    const messageTicketWhatsapp = messageData.ticket.whatsapp;
    await this.createWhatsapp(messageTicketWhatsapp);
    const messageTicket = messageData.ticket;
    await this.createTicket(messageTicket);

    return await this.createMessageData(messageData);
  }

  async createContact(createContactDto: CreateContactDto): Promise<Contact> {
    return new Promise(async (resolve, reject) => {
      const contact = plainToInstance(Contact, createContactDto);
      resolve(this.contactRepository.save(contact));
    })
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return new Promise(async (resolve, reject) => {
      const user = plainToInstance(User, createUserDto);
      resolve(this.userRepository.save(user));
    })
  }

  async createQueue(createQueueDto: CreateQueueDto): Promise<Queue> {
    return new Promise(async (resolve, reject) => {
      const message = this.queueRepository.create(createQueueDto);
      resolve(this.queueRepository.save(message));
    })
  }

  async createWhatsapp(createWhatsappDto: CreateWhatsappDto): Promise<Whatsapp> {
    return new Promise(async (resolve, reject) => {
      const message = this.whatsappRepository.create(createWhatsappDto);
      resolve(this.whatsappRepository.save(message));
    })
  }

  async createTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
    return new Promise(async (resolve, reject) => {
      const message = this.ticketRepository.create(createTicketDto);
      resolve(this.ticketRepository.save(message));
    })
  }

  async createMessageData(createMessageDataDto: CreateMessageDataDto): Promise<Message> {
    return new Promise(async (resolve, reject) => {
      const message = this.messageRepository.create(createMessageDataDto);
      resolve(this.messageRepository.save(message));
    })
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
