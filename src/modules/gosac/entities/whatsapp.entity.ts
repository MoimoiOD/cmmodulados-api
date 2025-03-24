import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Whatsapp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true })
    mediaUrl: string | null;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    session: string;

    @Column({ type: 'varchar', length: 255 })
    qrcode: string;

    @Column({ type: 'varchar', length: 255 })
    status: string;

    @Column({ type: 'varchar', length: 255 })
    battery: string;

    @Column({ type: 'boolean' })
    plugged: boolean;

    @Column({ type: 'int' })
    defaultQueueId: number;

    @Column({ type: 'int' })
    retries: number;

    @Column({ type: 'varchar', length: 255 })
    greetingMessage: string;

    @Column({ type: 'varchar', length: 255 })
    closeMessage: string;

    @Column({ type: 'varchar', length: 255 })
    outTimeMessage: string;

    @Column({ type: 'varchar', length: 255 })
    contingencyMessage: string;

    @Column({ type: 'varchar', nullable: true })
    greetingArchive: string;

    @Column({ type: 'varchar', nullable: true })
    endContingencyMessage: string | null;

    @Column({ type: 'boolean' })
    isDefault: boolean;

    @Column({ type: 'varchar', length: 255 })
    startTime: string;

    @Column({ type: 'varchar', length: 255 })
    finishTime: string;

    @Column({ type: 'boolean' })
    sum: boolean;

    @Column({ type: 'boolean' })
    mon: boolean;

    @Column({ type: 'boolean' })
    tue: boolean;

    @Column({ type: 'boolean' })
    wed: boolean;

    @Column({ type: 'boolean' })
    thu: boolean;

    @Column({ type: 'boolean' })
    fri: boolean;

    @Column({ type: 'boolean' })
    sat: boolean;

    @Column({ type: 'datetime', nullable: true })
    resetAt: string | null;

    @Column({ type: 'datetime' })
    syncAt: string;

    @Column({ type: 'int' })
    syncPercent: number;

    @Column({ type: 'boolean' })
    enabled: boolean;

    @Column({ type: 'datetime' })
    startedAt: string;

    @Column({ type: 'varchar', length: 255 })
    type: string;

    @Column({ type: 'varchar', nullable: true })
    apiId: string | null;

    @Column({ type: 'varchar', nullable: true })
    apiHash: string | null;

    @Column({ type: 'varchar', length: 255 })
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

    @Column({ type: 'boolean' })
    npsEnabled: boolean;

    @Column({ type: 'varchar', length: 255 })
    npsMessage: string;

    @Column({ type: 'varchar', nullable: true })
    provider: string | null;

    @Column({ type: 'boolean' })
    settedWebHook: boolean;

    @Column({ type: 'boolean' })
    enableZeroMenu: boolean;

    @Column({ type: 'int' })
    openingHoursId: number;

    @Column({ type: 'datetime' })
    qrCreatedAt: string;

    @Column({ type: 'varchar', nullable: true })
    host: string | null;

    @Column({ type: 'int', nullable: true })
    port: number | null;

    @Column({ type: 'boolean' })
    tls: boolean;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: string;

    @Column({ type: 'datetime', nullable: true })
    deletedAt: string | null;
}
