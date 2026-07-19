import { Test, TestingModule } from '@nestjs/testing';
import { AutoRecordController } from './auto-record.controller';
import { AutoRecordService } from './auto-record.service';

describe('AutoRecordController', () => {
  let controller: AutoRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutoRecordController],
      providers: [AutoRecordService],
    }).compile();

    controller = module.get<AutoRecordController>(AutoRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
