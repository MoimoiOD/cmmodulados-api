import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Connection } from "./connection.entity";
import { WabaTemplateComponent } from "./waba-template-component.entity";

@Entity()
export class WabaTemplate {
    @PrimaryGeneratedColumn()
    databaseId: number;

    @Column({ type: 'int' })
    id: number;

    @Column({ type: 'int', nullable: true })
    waba_id: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name: string | null;

    @Column({ type: 'varchar', nullable: true })
    category: string | null;
    
    @Column({ type: 'varchar', nullable: true })
    language: string | null;
    
    @Column({ type: 'boolean', nullable: true })
    approved: boolean | null;
    
    @Column({ type: 'varchar', nullable: true })
    rejected_reason: string | null;
    
    @Column({ type: 'boolean', nullable: true })
    enabled: boolean | null;
    
    @Column({ type: 'int', nullable: true })
    connectionId: number | null;
    
    @Column({ type: 'varchar', nullable: true })
    namespace: string | null;
    
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    createdAt: string | null;
    
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt: string | null;

    @ManyToOne(() => Connection, (component) => component.databaseId, { nullable: true })
    @JoinColumn({ name: 'connectionId' })
    connection: Connection | null;
    
    @OneToMany(() => WabaTemplateComponent, (component) => component.databaseId)
    @JoinColumn({ name: 'wabaTemplateComponentId' })
    wabaTemplateComponent: WabaTemplateComponent[] | null;

}