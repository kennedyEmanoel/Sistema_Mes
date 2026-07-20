import { Test, TestingModule } from '@nestjs/testing';
import { ProductionOrderController } from './production-order.controller';
import { ProductionOrderService } from './production-order.service';

describe('ProductionOrderController', () => {
  let controller: ProductionOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductionOrderController],
      providers: [ProductionOrderService],
    }).compile();

    controller = module.get<ProductionOrderController>(
      ProductionOrderController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
