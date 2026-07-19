import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoRecordService } from './auto-record.service';
import { AutoRecordController } from './auto-record.controller';
import { AutoRecord } from './entities/auto-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AutoRecord])],
  controllers: [AutoRecordController],
  providers: [AutoRecordService],
})
export class AutoRecordModule {}
