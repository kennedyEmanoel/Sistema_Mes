import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductionOrderService } from './production-order.service';
import { ProductionOrderController } from './production-order.controller';
import { ProductionOrder } from './entities/production-order.entity';
@Module({
  // 2. Avisando o TypeORM para usar essa entidade
  imports: [TypeOrmModule.forFeature([ProductionOrder])],
  controllers: [ProductionOrderController],
  providers: [ProductionOrderService],
})
export class ProductionOrderModule {}
