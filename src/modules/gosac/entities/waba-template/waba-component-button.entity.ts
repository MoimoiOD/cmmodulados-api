import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { WabaTemplateComponent } from './waba-template-component.entity';

@Entity()
export class WabaComponentButton {
  @PrimaryGeneratedColumn()
  databaseId: number;

  @Column({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  cType: string | null;
  
  @Column({ type: 'varchar', length: 255, nullable: true })
  text: string | null;
  
  @Column({ type: 'varchar', length: 255, nullable: true })
  url: string | null;
  
  @Column({ type: 'varchar', length: 255, nullable: true })
  phone_number: string | null;
  
  @Column({ type: 'varchar', length: 255, nullable: true })
  example: string | null;

  @ManyToOne(() => WabaTemplateComponent, (component) => component.wabaComponentButton)
  @JoinColumn({ name: 'wabaTemplateComponentId' })
  wabaTemplateComponent: WabaTemplateComponent;
}
