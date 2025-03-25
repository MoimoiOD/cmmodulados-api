import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Ticket } from './ticket.entity';
import { Contact } from './contact.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  databaseId: number;

  @Column({ type: 'int', unique: true })
  id: string;

  @Column({ nullable: true })
  ack: number;

  @Column({ nullable: true })
  read: boolean;

  @Column({ nullable: true })
  fromMe: boolean;

  @Column({ nullable: true })
  body: string;

  @Column({ nullable: true })
  mediaType: string;

  @Column({ nullable: true })
  messageId: string;

  @Column({ nullable: true })
  queueId: number;

  @Column({ nullable: true })
  isDeleted: boolean;

  @Column({ type: 'text', nullable: true })
  createdAt: Date;

  @Column({ type: 'text', nullable: true })
  updatedAt: Date;
  
  @ManyToOne(() => Ticket, (ticket) => ticket.databaseId, { nullable: true })
  @JoinColumn({ name: 'ticketId' })
  ticket: Ticket;

  @ManyToOne(() => Contact, (contact) => contact.databaseId, { nullable: true })
  @JoinColumn({ name: 'contactId' })
  contact: Contact;

}
