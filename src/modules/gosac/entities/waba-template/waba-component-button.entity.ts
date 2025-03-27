import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
