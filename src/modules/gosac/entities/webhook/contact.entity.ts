import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    databaseId: number;

    @Column({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', nullable: true })
    name: string | null;

    @Column({ type: 'varchar', nullable: true })
    number: string | null;

    @Column({ type: 'varchar', nullable: true })
    email: string | null;

    @Column({ type: 'varchar', nullable: true })
    profilePicUrl: string | null;

    @Column({ type: 'boolean', nullable: true })
    isGroup: boolean | null;

    @Column({ type: 'boolean', nullable: true })
    hasWhatsapp: boolean | null;

    @Column({ type: 'boolean', nullable: true })
    hasTelegram: boolean | null;

    @Column({ type: 'int', nullable: true })
    defaultUserId: number | null; 

    @Column({ type: 'int', nullable: true })
    defaultQueueId: number | null;

    @Column({ type: 'text', nullable: true })
    observation: string | null;

    @Column({ type: 'text', nullable: true })
    document: string | null;

    @Column({ type: 'text', nullable: true })
    contract: string | null;

    @Column('decimal', { nullable: true })
    value: number | null;

    @Column({ type: 'text', nullable: true })
    kind: string | null;

    @Column({ type: 'boolean', nullable: true })
    imported: boolean | null;

    @Column({ type: 'boolean', nullable: true })
    favorite: boolean | null;

    @Column({ type: 'integer', nullable: true })
    whatsAppId: number | null;

    @Column({ type: 'text', nullable: true })
    cpf: string | null;

    @Column({ type: 'text', nullable: true })
    instagram: string | null;

    @Column({ type: 'text', nullable: true })
    linkedIn: string | null;

    @Column({ type: 'text', nullable: true })
    company: string | null;

    @Column({ type: 'text', nullable: true })
    cnpj: string | null;

    @Column({ type: 'date', nullable: true })
    validity: string | null;

    @Column({ type: 'integer', nullable: true })
    telegramId: number | null;

    @Column({ type: 'text', nullable: true })
    telegramUsername: string | null;

    @Column({ type: 'boolean', nullable: true })
    blacklist: boolean | null;

    @Column({ type: 'datetime', nullable: true })
    createdAt: string | null;

    @Column({ type: 'datetime', nullable: true })
    updatedAt: string | null;
}
