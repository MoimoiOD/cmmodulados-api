import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Connection {
    @PrimaryGeneratedColumn()
    databaseId: number;

    @Column({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name: string | null;
}