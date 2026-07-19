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
  id!: number;

  @Column()
  imei_serial!: string; // O IMEI ou Serial limpo, extraído da etiqueta

  @Column({ default: 'Boa' })
  status!: string; // 'Boa', 'Defeito', ou 'Manutencao'

  @CreateDateColumn()
  scanned_at!: Date; // A data e hora exata do bipe (nosso Timestamp)

  // --- RELACIONAMENTOS ---

  // 1. Qual é a OP dessa peça?
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  @ManyToOne(() => ProductionOrder, { onDelete: 'CASCADE' })
  productionOrder!: ProductionOrder;

  // 2. Em qual Etapa ela foi bipada?
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  @ManyToOne(() => Step, { onDelete: 'CASCADE' })
  step!: Step;

  // 3. Quem foi o operador que bipou?
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  @ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
  user!: User;
}
