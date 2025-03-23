import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { CreateMessageDataDto } from './dto/message/create-message-data.dto';
import { CreateMessageDto } from './dto/message/create-message.dto';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/contact/create-contact.dto';
import { CreateTicketDto } from './dto/ticket/create-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class GosacService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>
  ) {}

  async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
    const messageData = createMessageDto.data;
    const messageContact = messageData

    const message = this.messageRepository.create(messageData);
    return this.messageRepository.save(message);
  }

  // async createContact(createContactDto: CreateContactDto): Promise<Contact> {

  // }

  // async createTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
  // }
}
