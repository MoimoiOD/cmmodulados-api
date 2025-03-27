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
    status: string | null;

    @Column({ type: 'int', nullable: true })
    unreadMessages: number | null;

    @Column({ type: 'int', nullable: true })
    unreadMessages2: number | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    lastMessage: string | null;

    @Column({ type: 'boolean', nullable: true })
    isGroup: boolean | null;

    @Column({ type: 'int', nullable: true })
    userId: number | null;

    @Column({ type: 'int', nullable: true })
    contactId: number | null;

    @Column({ type: 'int', nullable: true })
    whatsappId: number | null;

    @Column({ type: 'int', nullable: true })
    queueId: number | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    protocol: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    lastAction: string | null;

    @Column({ type: 'int', nullable: true })
    destinationUserId: number | null;

    @Column({ type: 'int', nullable: true })
    statusBot: number | null;

    @Column({ type: 'int', nullable: true })
    syncTotal: number | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    onMenu: string | null;

    @Column({ type: 'int', nullable: true })
    npsValue: number | null;

    @Column({ type: 'datetime', nullable: true })
    closedAt: string | null;

    @Column({ type: 'datetime', nullable: true })
    lastMessageAt: string | null;

    @Column({ type: 'int', nullable: true })
    departmentId: number | null;

    @Column({ type: 'boolean', nullable: true })
    imported: boolean | null;

    @Column({ type: 'int', nullable: true })
    transmissionId: number | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    kind: string | null;

    @Column({ type: 'int', nullable: true })
    onMenuId: number | null;

    @Column({ type: 'varchar', nullable: true })
    window: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    closureObservation: string;

    @Column({ type: 'varchar', nullable: true })
    sourceUrl: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    origin: string | null;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    createdAt: string | null;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt: string | null;

    @ManyToOne(() => Contact, { nullable: true })
    @JoinColumn({ name: 'contactId' })
    contact: Contact | null;

    @ManyToOne(() => User, { nullable: true })
    @JoinColumn({ name: 'userId' })
    user: User | null;

    @ManyToOne(() => Queue, { nullable: true })
    @JoinColumn({ name: 'queueId' })
    queue: Queue | null;

    @ManyToOne(() => Whatsapp, { nullable: true })
    @JoinColumn({ name: 'whatsappId' })
    whatsapp: Whatsapp | null;
}
