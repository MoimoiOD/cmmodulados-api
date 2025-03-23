import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Contact } from './contact.entity';
import { Ticket } from './ticket.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
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

  @ManyToOne(() => Contact, (contact) => contact.messages)
  contact: Contact;

  @ManyToOne(() => Ticket, (ticket) => ticket.id)
  ticket: Ticket;
}
