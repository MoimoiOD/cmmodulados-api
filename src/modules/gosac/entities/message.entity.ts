import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Ticket } from './ticket.entity';
import { Contact } from './contact.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  databaseId: number;

  @Column({ type: 'int', unique: true })
  id: string;

  @Column()
  ack: number;

  @Column()
  read: boolean;

  @Column()
  fromMe: boolean;

  @Column()
  body: string;

  @Column()
  mediaType: string;

  @Column()
  messageId: string;

  @Column()
  queueId: number;

  @Column()
  isDeleted: boolean;

  @Column({ type: 'text' })
  createdAt: Date;

  @Column({ type: 'text' })
  updatedAt: Date;
  
  @ManyToOne(() => Ticket, (ticket) => ticket.databaseId)
  @JoinColumn({ name: 'ticketId' })
  ticket: Ticket;

  @ManyToOne(() => Contact, (contact) => contact.databaseId)
  @JoinColumn({ name: 'contactId' })
  contact: Contact;

}
