import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('production_orders')
export class ProductionOrder {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  op_number!: string; // Ex: OP-2026-001

  @Column()
  raw_material!: string; // Qual material vai ser usado

  @Column({ type: 'timestamp', nullable: true })
  start_date!: Date; // Quando a OP realmente começou

  @Column({ type: 'timestamp', nullable: true })
  estimated_end_date!: Date; // Previsão de fim

  @Column({ type: 'int' })
  target_quantity!: number; // A meta total de peças (ex: 5000)

  @Column({ default: 'Aberta' })
  status!: string; // Aberta, Em Andamento, Concluída

  @CreateDateColumn()
  created_at!: Date;
}
