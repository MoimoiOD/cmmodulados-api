import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    databaseId: number;

    @Column({ type: 'int', unique: true })
    id: number;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    number: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    profilePicUrl: string;

    @Column({ nullable: true })
    isGroup: boolean;

    @Column({ nullable: true })
    hasWhatsapp: boolean;

    @Column({ nullable: true })
    hasTelegram: boolean;

    @Column({ type: 'int', nullable: true})
    defaultUserId: number| null;

    @Column({ nullable: true })
    defaultQueueId: number;

    @Column({ type: 'text', nullable: true })
    observation: string | null;

    @Column({ type: 'text', nullable: true })
    document: string | null;

    @Column({ type: 'text', nullable: true })
    contract: string | null;

    @Column('decimal', { nullable: true })
    value: number | null;

    @Column({ nullable: true })
    kind: string;

    @Column({ nullable: true })
    imported: boolean;

    @Column({ nullable: true })
    favorite: boolean;

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

    @Column({ nullable: true })
    blacklist: boolean;

    @Column({ type: 'datetime', nullable: true })
    createdAt: string;

    @Column({ type: 'datetime', nullable: true })
    updatedAt: string;
}
