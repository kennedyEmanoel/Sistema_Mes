import { Test, TestingModule } from '@nestjs/testing';
import { ManualRecordService } from './manual-record.service';

describe('ManualRecordService', () => {
  let service: ManualRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManualRecordService],
    }).compile();

    service = module.get<ManualRecordService>(ManualRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
