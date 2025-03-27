import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WabaComponentButton {
  @PrimaryGeneratedColumn()
  databaseId: number;

  @Column({ type: 'int' })
  wabaComponentButton?: any[] | null;
}
