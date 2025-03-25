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

    @Column({ type: 'varchar', length: 255, nullable: true })
    status: string;

    @Column({ type: 'int', nullable: true })
    unreadMessages: number;

    @Column({ type: 'int', nullable: true })
    unreadMessages2: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    lastMessage: string;

    @Column({ type: 'boolean', nullable: true })
    isGroup: boolean;

    @Column({ type: 'int', nullable: true })
    userId: number;

    @Column({ type: 'int', nullable: true })
    contactId: number;

    @Column({ type: 'int', nullable: true })
    whatsappId: number;

    @Column({ type: 'int', nullable: true })
    queueId: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    protocol: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    lastAction: string;

    @Column({ type: 'int', nullable: true })
    destinationUserId: number | null;

    @Column({ type: 'int', nullable: true })
    statusBot: number;

    @Column({ type: 'int', nullable: true })
    syncTotal: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    onMenu: string;

    @Column({ type: 'int', nullable: true })
    npsValue: number | null;

    @Column({ type: 'datetime', nullable: true })
    closedAt: string | null;

    @Column({ type: 'datetime', nullable: true })
    lastMessageAt: string;

    @Column({ type: 'int', nullable: true })
    departmentId: number | null;

    @Column({ type: 'boolean', nullable: true })
    imported: boolean | null;

    @Column({ type: 'int', nullable: true })
    transmissionId: number | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    kind: string;

    @Column({ type: 'int', nullable: true })
    onMenuId: number;

    @Column({ type: 'varchar', nullable: true })
    window: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    closureObservation: string;

    @Column({ type: 'varchar', nullable: true })
    sourceUrl: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    origin: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    createdAt: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt: string;

    @ManyToOne(() => Contact, { nullable: true })
    @JoinColumn({ name: 'contactId' })
    contact: Contact;

    @ManyToOne(() => User, { nullable: true })
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => Queue, { nullable: true })
    @JoinColumn({ name: 'queueId' })
    queue: Queue;

    @ManyToOne(() => Whatsapp, { nullable: true })
    @JoinColumn({ name: 'whatsappId' })
    whatsapp: Whatsapp;
}
