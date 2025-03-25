import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    databaseId: number;

    @Column({ type: 'int', unique: true })
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 255 })
    passwordHash: string;

    @Column({ type: 'int', default: 0 })
    tokenVersion: number;

    @Column({ type: 'varchar', length: 255 })
    profileSlug: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    username: string;

    @Column({ type: 'varchar', nullable: true })
    avatar: string | null;

    @Column({ type: 'boolean', default: false })
    showAllQueuesMessages: boolean;

    @Column({ type: 'boolean', default: true })
    active: boolean;

    @Column({ type: 'int', nullable: true })
    limitTickets: number | null;

    @Column({ type: 'int', nullable: true })
    limitTicketsOpening: number | null;

    @Column({ type: 'varchar', length: 14 })
    cpf: string;

    @Column({ type: 'varchar', nullable: true })
    rg: string | null;

    @Column({ type: 'datetime', nullable: true })
    acceptedAt: string | null;

    @Column({ type: 'date', nullable: true })
    birthday: string | null;

    @Column({ type: 'datetime', nullable: true })
    changedPasswordAt: string | null;

    @Column({ type: 'varchar', length: 255 })
    userNotification: string;

    @Column({ type: 'int', default: 0 })
    isManager: number;

    @Column({ type: 'int', nullable: true })
    defaultQueueId: number | null;

    @Column({ type: 'varchar', length: 255 })
    token: string;

    @Column({ type: 'boolean', default: false })
    viewAllGroups: boolean;

    @Column({ type: 'varchar', length: 255 })
    limitTicketsOpeningType: string;

    @Column({ type: 'boolean', default: false })
    limitTicketsOpeningNotification: boolean;

    @Column({ type: 'boolean', default: false })
    limitTicketsNotification: boolean;

    @Column({ type: 'varchar', length: 255 })
    logUsersAccess: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: string;

    @Column({ type: 'datetime', nullable: true })
    deletedAt: string | null;
}
