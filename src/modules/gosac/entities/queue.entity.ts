import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Queue {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    color: string;

    @Column({ type: 'varchar', nullable: true })
    greetingMessage: string;

    @Column({ type: 'varchar', nullable: true })
    greetingArchive: string;

    @Column({ type: 'int' })
    order: number;

    @Column({ type: 'int' })
    defaultUserId: number | null;

    @Column({ type: 'boolean', default: false })
    autoClose: boolean;

    @Column({ type: 'boolean', default: false })
    noEvaluation: boolean;

    @Column({ type: 'boolean', default: false })
    returnMainMenu: boolean;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: string;

    @Column({ type: 'datetime', nullable: true })
    deletedAt: string | null;
}
