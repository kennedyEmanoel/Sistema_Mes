import { Test, TestingModule } from '@nestjs/testing';
import { ManualRecordController } from './manual-record.controller';
import { ManualRecordService } from './manual-record.service';

describe('ManualRecordController', () => {
  let controller: ManualRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManualRecordController],
      providers: [ManualRecordService],
    }).compile();

    controller = module.get<ManualRecordController>(ManualRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
