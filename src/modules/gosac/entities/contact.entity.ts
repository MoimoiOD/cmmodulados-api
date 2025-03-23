import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Message } from './message.entity';
import { Ticket } from './ticket.entity';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  number: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  profilePicUrl: string;

  @Column({ default: false })
  isGroup: boolean;

  @OneToMany(() => Message, (message) => message.contact)
  messages: Message[];

  @OneToMany(() => Ticket, (ticket) => ticket.contact)
  tickets: Ticket[];
}
