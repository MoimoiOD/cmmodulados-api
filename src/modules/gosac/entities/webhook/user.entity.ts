import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    databaseId: number;

    @Column({ type: 'int', unique: true })
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name: string | null;

    @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
    email: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    passwordHash: string | null;

    @Column({ type: 'int', default: 0, nullable: true })
    tokenVersion: number | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    profileSlug: string | null;

    @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
    username: string | null;

    @Column({ type: 'varchar', nullable: true })
    avatar: string | null;

    @Column({ type: 'boolean', default: false, nullable: true })
    showAllQueuesMessages: boolean | null;

    @Column({ type: 'boolean', default: true, nullable: true })
    active: boolean | null;

    @Column({ type: 'int', nullable: true })
    limitTickets: number | null;

    @Column({ type: 'int', nullable: true })
    limitTicketsOpening: number | null;

    @Column({ type: 'varchar', length: 14, nullable: true })
    cpf: string | null;

    @Column({ type: 'varchar', nullable: true })
    rg: string | null;

    @Column({ type: 'datetime', nullable: true })
    acceptedAt: string | null;

    @Column({ type: 'date', nullable: true })
    birthday: string | null;

    @Column({ type: 'datetime', nullable: true })
    changedPasswordAt: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    userNotification: string | null;

    @Column({ type: 'int', default: 0, nullable: true })
    isManager: number | null;

    @Column({ type: 'int', nullable: true })
    defaultQueueId: number | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    token: string | null;

    @Column({ type: 'boolean', default: false, nullable: true })
    viewAllGroups: boolean | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    limitTicketsOpeningType: string | null;

    @Column({ type: 'boolean', default: false, nullable: true })
    limitTicketsOpeningNotification: boolean | null;

    @Column({ type: 'boolean', default: false, nullable: true })
    limitTicketsNotification: boolean | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    logUsersAccess: string | null;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    createdAt: string | null;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt: string | null;

    @Column({ type: 'datetime', nullable: true })
    deletedAt: string | null;
}
