import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Ticket } from './ticket.entity';
import { Contact } from './contact.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  databaseId: number;

  @Column({ type: 'varchar' })
  id: string;

  @Column({ type: 'int', nullable: true })
  ack: number | null;

  @Column({ type: 'boolean', nullable: true })
  read: boolean | null;

  @Column({ type: 'boolean', nullable: true })
  fromMe: boolean | null;

  @Column({ type: 'varchar', nullable: true })
  body: string | null;

  @Column({ type: 'varchar', nullable: true })
  mediaType: string | null;

  @Column({ type: 'int', nullable: true })
  messageId: number | null;

  @Column({ type: 'int', nullable: true })
  queueId: number | null;

  @Column({ type: 'int', nullable: true })
  templateId: number | null;

  @Column({ type: 'boolean', nullable: true })
  isDeleted: boolean | null;

  @Column({ type: 'datetime', nullable: true })
  createdAt: Date | null;

  @Column({ type: 'datetime', nullable: true })
  updatedAt: Date | null;

  @Column({ type: 'varchar', nullable: true })
  quotedMsgId: string | null;

  @Column({ type: 'int', nullable: true })
  ticketId: number | null;

  @Column({ type: 'int', nullable: true })
  contactId: number;

  @Column({ type: 'int', nullable: true })
  groupContactId: number | null;

  @Column({ type: 'boolean', nullable: true })
  fromGroup: boolean | null;

  @Column({ type: 'int', nullable: true })
  connectionId: number | null;

  @Column({ type: 'int', nullable: true })
  vcardContactId: number | null;

  @Column({ type: 'boolean', nullable: true })
  isForwarded: boolean | null;

  @Column({ type: 'int', nullable: true })
  senderUserId: number | null;

  @Column({ type: 'int', nullable: true })
  destinationUserId: number | null;

  @Column({ type: 'boolean', nullable: true })
  sent: boolean | null;

  @Column({ type: 'int', nullable: true })
  imageId: number | null;

  @Column({ type: 'varchar', nullable: true })
  errorMessage: string | null;

  @Column({ type: 'varchar', nullable: true })
  kind: string | null;

  @Column({ type: 'int', nullable: true })
  transmissionId: number | null;

  @Column({ type: 'boolean', nullable: true })
  downloaded: boolean | null;

  @Column({ type: 'varchar', nullable: true })
  vCardContact: string | null;

  @Column({ type: 'varchar', nullable: true })
  quotedMsg: string | null;

  @ManyToOne(() => Contact, (contact) => contact.databaseId, { nullable: true })
  @JoinColumn({ name: 'contactId' })
  contact: Contact | null;

  @ManyToOne(() => Ticket, (ticket) => ticket.databaseId, { nullable: true })
  @JoinColumn({ name: 'ticketId' })
  ticket: Ticket | null;

}
