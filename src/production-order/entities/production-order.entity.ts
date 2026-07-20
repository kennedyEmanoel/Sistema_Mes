import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('production_orders')
export class ProductionOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  op_number: string;

  @Column()
  raw_material: string;

  @Column({ type: 'timestamp', nullable: true })
  start_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  estimated_end_date: Date;

  @Column({ type: 'int' })
  target_quantity: number;

  @Column({ default: 'Aberta' })
  status: string;

  @CreateDateColumn()
  created_at!: Date;
}
