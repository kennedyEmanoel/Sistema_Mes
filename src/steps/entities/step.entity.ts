import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ProductionOrder } from '../../production-order/entities/production-order.entity';

@Entity('steps')
export class Step {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int' })
  order_index: number;

  @Column({ type: 'int', default: 0 })
  target_quantity: number;

  @ManyToOne(() => ProductionOrder, {
    onDelete: 'CASCADE',
  })
  productionOrder!: ProductionOrder;
}
