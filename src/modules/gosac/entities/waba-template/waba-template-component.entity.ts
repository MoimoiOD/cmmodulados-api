import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { WabaComponentButton } from './waba-component-button.entity';
import { WabaVariablesDescriptions } from './waba-variables-descriptions.entity';

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

    @OneToMany(() => WabaComponentButton, (component) => component.databaseId)
    @JoinColumn({ name: 'wabaComponentButtonId' })
    wabaComponentButton: WabaComponentButton[] | null;

    @OneToMany(() => WabaVariablesDescriptions, (component) => component.databaseId)
    @JoinColumn({ name: 'wabaVariablesDescriptionsId' })
    wabaVariablesDescriptions: WabaVariablesDescriptions[] | null;
}