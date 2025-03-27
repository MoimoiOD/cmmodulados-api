import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Queue {
    @PrimaryGeneratedColumn()
    databaseId: number;

    @Column({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    color: string | null;

    @Column({ type: 'varchar', nullable: true })
    greetingMessage: string | null;

    @Column({ type: 'varchar', nullable: true })
    greetingArchive: string | null;

    @Column({ type: 'int', nullable: true })
    order: number | null;

    @Column({ type: 'int', nullable: true })
    defaultUserId: number | null;

    @Column({ type: 'boolean', default: false, nullable: true })
    autoClose: boolean | null;

    @Column({ type: 'boolean', default: false, nullable: true })
    noEvaluation: boolean | null;

    @Column({ type: 'boolean', default: false, nullable: true })
    returnMainMenu: boolean | null;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    createdAt: string | null;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt: string | null;

    @Column({ type: 'datetime', nullable: true })
    deletedAt: string | null;
}
