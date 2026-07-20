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

@Entity('auto_records')
export class AutoRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imei_serial: string;

  @Column({ default: 'Boa' })
  status: string;

  @CreateDateColumn()
  scanned_at: Date;

  @ManyToOne(() => ProductionOrder, { onDelete: 'CASCADE' })
  productionOrder: ProductionOrder;

  @ManyToOne(() => Step, { onDelete: 'CASCADE' })
  step: Step;

  @ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
  user: User;
}
