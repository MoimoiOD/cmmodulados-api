import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Whatsapp {
    @PrimaryGeneratedColumn()
    databaseId: number;

    @Column({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', nullable: true })
    mediaUrl: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    session: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    qrcode: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    status: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    battery: string | null;

    @Column({ type: 'boolean', nullable: true })
    plugged: boolean | null;

    @Column({ type: 'int', nullable: true })
    defaultQueueId: number | null;

    @Column({ type: 'int', nullable: true })
    retries: number | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    greetingMessage: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    closeMessage: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    outTimeMessage: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    contingencyMessage: string | null;

    @Column({ type: 'varchar', nullable: true })
    greetingArchive: string | null;

    @Column({ type: 'varchar', nullable: true })
    endContingencyMessage: string | null;

    @Column({ type: 'boolean', nullable: true })
    isDefault: boolean | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    startTime: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    finishTime: string | null;

    @Column({ type: 'boolean', nullable: true })
    sum: boolean | null;

    @Column({ type: 'boolean', nullable: true })
    mon: boolean | null;

    @Column({ type: 'boolean', nullable: true })
    tue: boolean | null;

    @Column({ type: 'boolean', nullable: true })
    wed: boolean | null;

    @Column({ type: 'boolean', nullable: true })
    thu: boolean | null;

    @Column({ type: 'boolean', nullable: true })
    fri: boolean | null;

    @Column({ type: 'boolean', nullable: true })
    sat: boolean | null;

    @Column({ type: 'datetime', nullable: true })
    resetAt: string | null;

    @Column({ type: 'datetime', nullable: true })
    syncAt: string | null;

    @Column({ type: 'int', nullable: true })
    syncPercent: number | null;

    @Column({ type: 'boolean', nullable: true })
    enabled: boolean | null;

    @Column({ type: 'datetime', nullable: true })
    startedAt: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    type: string | null;

    @Column({ type: 'varchar', nullable: true })
    apiId: string | null;

    @Column({ type: 'varchar', nullable: true })
    apiHash: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    phoneNumber: string | null;

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
    npsEnabled: boolean | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    npsMessage: string | null;

    @Column({ type: 'varchar', nullable: true })
    provider: string | null;

    @Column({ type: 'boolean', nullable: true })
    settedWebHook: boolean | null;

    @Column({ type: 'boolean', nullable: true })
    enableZeroMenu: boolean | null;

    @Column({ type: 'int', nullable: true })
    openingHoursId: number | null;

    @Column({ type: 'datetime', nullable: true })
    qrCreatedAt: string | null;

    @Column({ type: 'varchar', nullable: true })
    host: string | null;

    @Column({ type: 'int', nullable: true })
    port: number | null;

    @Column({ type: 'boolean', nullable: true })
    tls: boolean | null;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    createdAt: string | null;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt: string | null;

    @Column({ type: 'datetime', nullable: true })
    deletedAt: string | null;
}
