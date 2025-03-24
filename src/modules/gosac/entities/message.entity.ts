import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Ticket } from './ticket.entity';
import { Contact } from './contact.entity';

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

  @ManyToOne(() => Contact, (contact) => contact.id)
  contact: Contact;

  @ManyToOne(() => Ticket, (ticket) => ticket.id)
  ticket: Ticket;
}
