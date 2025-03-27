import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WabaTemplateComponent {
    @PrimaryGeneratedColumn()
    databaseId: number;

    @Column({ type: 'int' })
    id: number;

    @Column({ type: 'int', nullable: true })
    wabaTemplateId: number | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    cType: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    format: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    example: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    text: string | null;

    @Column({ type: 'int', nullable: true })
    wabaComponentButton: number | null;

    @Column({ type: 'int', nullable: true })
    wabaVariablesDescriptions: number | null;
}