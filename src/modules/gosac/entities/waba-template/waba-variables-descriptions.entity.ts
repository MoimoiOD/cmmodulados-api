import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { WabaTemplateComponent } from "./waba-template-component.entity";

@Entity()
export class WabaVariablesDescriptions {
    @PrimaryGeneratedColumn()
    databaseId: number;

    @Column({ type: 'int' })
    id: number;

    @Column({ type: 'int', nullable: true })
    wabaTemplateCo: number | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    variable: string | null;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    createdAt: string | null;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt: string | null;

    @ManyToOne(() => WabaTemplateComponent, (component) => component.wabaVariablesDescriptions)
    @JoinColumn({ name: 'wabaTemplateComponentId' })
    wabaTemplateComponent: WabaTemplateComponent;
}