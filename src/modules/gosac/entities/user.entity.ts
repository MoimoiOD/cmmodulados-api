import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    databaseId: number;

    @Column({ type: 'int', unique: true })
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name: string;

    @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
    email: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    passwordHash: string;

    @Column({ type: 'int', default: 0, nullable: true })
    tokenVersion: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    profileSlug: string;

    @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
    username: string;

    @Column({ type: 'varchar', nullable: true })
    avatar: string | null;

    @Column({ type: 'boolean', default: false, nullable: true })
    showAllQueuesMessages: boolean;

    @Column({ type: 'boolean', default: true, nullable: true })
    active: boolean;

    @Column({ type: 'int', nullable: true })
    limitTickets: number | null;

    @Column({ type: 'int', nullable: true })
    limitTicketsOpening: number | null;

    @Column({ type: 'varchar', length: 14, nullable: true })
    cpf: string;

    @Column({ type: 'varchar', nullable: true })
    rg: string | null;

    @Column({ type: 'datetime', nullable: true })
    acceptedAt: string | null;

    @Column({ type: 'date', nullable: true })
    birthday: string | null;

    @Column({ type: 'datetime', nullable: true })
    changedPasswordAt: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    userNotification: string;

    @Column({ type: 'int', default: 0, nullable: true })
    isManager: number;

    @Column({ type: 'int', nullable: true })
    defaultQueueId: number | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    token: string;

    @Column({ type: 'boolean', default: false, nullable: true })
    viewAllGroups: boolean;

    @Column({ type: 'varchar', length: 255, nullable: true })
    limitTicketsOpeningType: string;

    @Column({ type: 'boolean', default: false, nullable: true })
    limitTicketsOpeningNotification: boolean;

    @Column({ type: 'boolean', default: false, nullable: true })
    limitTicketsNotification: boolean;

    @Column({ type: 'varchar', length: 255, nullable: true })
    logUsersAccess: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    createdAt: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt: string;

    @Column({ type: 'datetime', nullable: true })
    deletedAt: string | null;
}
