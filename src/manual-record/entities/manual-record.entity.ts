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

  // Guarda o período do apontamento. Ex: "14:00 - 15:00"
  @Column()
  hour_range!: string;

  // Quantidade de peças boas produzidas no período
  @Column({ type: 'int' })
  produced_quantity!: number;

  // Quantidade de defeitos reportados (útil para o dashboard de qualidade)
  @Column({ type: 'int', default: 0 })
  defect_quantity!: number;

  @CreateDateColumn()
  created_at!: Date;

  // --- RELACIONAMENTOS ---

  // 1. Qual é a OP apontada?
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  @ManyToOne(() => ProductionOrder, { onDelete: 'CASCADE' })
  productionOrder!: ProductionOrder;

  // 2. Qual foi a Etapa? (Ex: Montagem)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  @ManyToOne(() => Step, { onDelete: 'CASCADE' })
  step!: Step;

  // 3. Quem foi o líder/operador que digitou esse registro?
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  @ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
  user!: User;
}
