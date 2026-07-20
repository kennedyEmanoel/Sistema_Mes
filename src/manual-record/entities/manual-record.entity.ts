import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ProductionOrder } from '../../production-order/entities/production-order.entity';
import { Step } from '../../steps/entities/step.entity';
import { User } from '../../users/entities/user.entity';

@Entity('manual_records')
export class ManualRecord {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  hour_range!: string;

  @Column({ type: 'int' })
  produced_quantity!: number;

  @Column({ type: 'int', default: 0 })
  defect_quantity!: number;

  @CreateDateColumn()
  created_at!: Date;

  @ManyToOne(() => ProductionOrder, { onDelete: 'CASCADE' })
  productionOrder: ProductionOrder;

  @ManyToOne(() => Step, { onDelete: 'CASCADE' })
  step!: Step;

  @ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
  user!: User;
}
