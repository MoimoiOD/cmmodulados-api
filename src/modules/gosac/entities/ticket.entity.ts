import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Queue } from './queue.entity';
import { Whatsapp } from './whatsapp.entity';
import { Contact } from './contact.entity';

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    databaseId: number;

    @Column({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', length: 255 })
    status: string;

    @Column({ type: 'int' })
    unreadMessages: number;

    @Column({ type: 'int' })
    unreadMessages2: number;

    @Column({ type: 'varchar', length: 255 })
    lastMessage: string;

    @Column({ type: 'boolean' })
    isGroup: boolean;

    @Column({ type: 'int' })
    userId: number;

    @Column({ type: 'int' })
    contactId: number;

    @Column({ type: 'int' })
    whatsappId: number;

    @Column({ type: 'int' })
    queueId: number;

    @Column({ type: 'varchar', length: 255 })
    protocol: string;

    @Column({ type: 'varchar', length: 255 })
    lastAction: string;

    @Column({ type: 'int', nullable: true })
    destinationUserId: number | null;

    @Column({ type: 'int' })
    statusBot: number;

    @Column({ type: 'int' })
    syncTotal: number;

    @Column({ type: 'varchar', length: 255 })
    onMenu: string;

    @Column({ type: 'int', nullable: true })
    npsValue: number | null;

    @Column({ type: 'datetime', nullable: true })
    closedAt: string | null;

    @Column({ type: 'datetime' })
    lastMessageAt: string;

    @Column({ type: 'int', nullable: true })
    departmentId: number | null;

    @Column({ type: 'boolean', nullable: true })
    imported: boolean | null;

    @Column({ type: 'int', nullable: true })
    transmissionId: number | null;

    @Column({ type: 'varchar', length: 255 })
    kind: string;

    @Column({ type: 'int' })
    onMenuId: number;

    @Column({ type: 'varchar', nullable: true })
    window: string | null;

    @Column({ type: 'varchar', length: 255 })
    closureObservation: string;

    @Column({ type: 'varchar', nullable: true })
    sourceUrl: string | null;

    @Column({ type: 'varchar', length: 255 })
    origin: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: string;

    @ManyToOne(() => Contact)
    @JoinColumn({ name: 'contactId' })
    contact: Contact;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => Queue)
    @JoinColumn({ name: 'queueId' })
    queue: Queue;

    @ManyToOne(() => Whatsapp)
    @JoinColumn({ name: 'whatsappId' })
    whatsapp: Whatsapp;
}
