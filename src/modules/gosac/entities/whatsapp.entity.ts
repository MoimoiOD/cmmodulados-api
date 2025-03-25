import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Whatsapp {
    @PrimaryGeneratedColumn()
    databaseId: number;

    @Column({ type: 'int', unique: true })
    id: number;

    @Column({ type: 'varchar', nullable: true })
    mediaUrl: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    session: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    qrcode: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    status: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    battery: string;

    @Column({ type: 'boolean', nullable: true })
    plugged: boolean;

    @Column({ type: 'int', nullable: true })
    defaultQueueId: number;

    @Column({ type: 'int', nullable: true })
    retries: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    greetingMessage: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    closeMessage: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    outTimeMessage: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    contingencyMessage: string;

    @Column({ type: 'varchar', nullable: true })
    greetingArchive: string;

    @Column({ type: 'varchar', nullable: true })
    endContingencyMessage: string | null;

    @Column({ type: 'boolean', nullable: true })
    isDefault: boolean;

    @Column({ type: 'varchar', length: 255, nullable: true })
    startTime: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    finishTime: string;

    @Column({ type: 'boolean', nullable: true })
    sum: boolean;

    @Column({ type: 'boolean', nullable: true })
    mon: boolean;

    @Column({ type: 'boolean', nullable: true })
    tue: boolean;

    @Column({ type: 'boolean', nullable: true })
    wed: boolean;

    @Column({ type: 'boolean', nullable: true })
    thu: boolean;

    @Column({ type: 'boolean', nullable: true })
    fri: boolean;

    @Column({ type: 'boolean', nullable: true })
    sat: boolean;

    @Column({ type: 'datetime', nullable: true })
    resetAt: string | null;

    @Column({ type: 'datetime', nullable: true })
    syncAt: string;

    @Column({ type: 'int', nullable: true })
    syncPercent: number;

    @Column({ type: 'boolean', nullable: true })
    enabled: boolean;

    @Column({ type: 'datetime', nullable: true })
    startedAt: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    type: string;

    @Column({ type: 'varchar', nullable: true })
    apiId: string | null;

    @Column({ type: 'varchar', nullable: true })
    apiHash: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    phoneNumber: string;

    @Column({ type: 'varchar', nullable: true })
    secretCode: string | null;

    @Column({ type: 'varchar', nullable: true })
    password: string | null;

    @Column({ type: 'varchar', nullable: true })
    username: string | null;

    @Column({ type: 'varchar', nullable: true })
    apiKey: string | null;

    @Column({ type: 'varchar', nullable: true })
    voipToken: string | null;

    @Column({ type: 'varchar', nullable: true })
    pageId: string | null;

    @Column({ type: 'varchar', nullable: true })
    accountRestriction: string | null;

    @Column({ type: 'int', nullable: true })
    accountViolationCount: number | null;

    @Column({ type: 'int', nullable: true })
    messagingLimit: number | null;

    @Column({ type: 'boolean', nullable: true })
    npsEnabled: boolean;

    @Column({ type: 'varchar', length: 255, nullable: true })
    npsMessage: string;

    @Column({ type: 'varchar', nullable: true })
    provider: string | null;

    @Column({ type: 'boolean', nullable: true })
    settedWebHook: boolean;

    @Column({ type: 'boolean', nullable: true })
    enableZeroMenu: boolean;

    @Column({ type: 'int', nullable: true })
    openingHoursId: number;

    @Column({ type: 'datetime', nullable: true })
    qrCreatedAt: string;

    @Column({ type: 'varchar', nullable: true })
    host: string | null;

    @Column({ type: 'int', nullable: true })
    port: number | null;

    @Column({ type: 'boolean', nullable: true })
    tls: boolean;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    createdAt: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt: string;

    @Column({ type: 'datetime', nullable: true })
    deletedAt: string | null;
}
