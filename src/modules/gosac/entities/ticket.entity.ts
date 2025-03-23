import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Contact } from './contact.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  unreadMessages: number;

  @Column()
  lastMessage: string;

  @ManyToOne(() => Contact, (contact) => contact.tickets)
  contact: Contact;
}
