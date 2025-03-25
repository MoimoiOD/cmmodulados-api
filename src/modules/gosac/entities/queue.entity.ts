import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Queue {
    @PrimaryGeneratedColumn()
    databaseId: number;

    @Column({ type: 'int', unique: true })
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    color: string;

    @Column({ type: 'varchar', nullable: true })
    greetingMessage: string;

    @Column({ type: 'varchar', nullable: true })
    greetingArchive: string;

    @Column({ type: 'int', nullable: true })
    order: number;

    @Column({ type: 'int', nullable: true })
    defaultUserId: number | null;

    @Column({ type: 'boolean', default: false, nullable: true })
    autoClose: boolean;

    @Column({ type: 'boolean', default: false, nullable: true })
    noEvaluation: boolean;

    @Column({ type: 'boolean', default: false, nullable: true })
    returnMainMenu: boolean;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    createdAt: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt: string;

    @Column({ type: 'datetime', nullable: true })
    deletedAt: string | null;
}
