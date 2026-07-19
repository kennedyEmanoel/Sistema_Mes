import { Test, TestingModule } from '@nestjs/testing';
import { AutoRecordService } from './auto-record.service';

describe('AutoRecordService', () => {
  let service: AutoRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutoRecordService],
    }).compile();

    service = module.get<AutoRecordService>(AutoRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
