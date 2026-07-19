import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManualRecordService } from './manual-record.service';
import { ManualRecordController } from './manual-record.controller';
import { ManualRecord } from './entities/manual-record.entity'; // <-- Importe a entidade

@Module({
  // Adicione esta linha para registrar a tabela no banco:
  imports: [TypeOrmModule.forFeature([ManualRecord])],
  controllers: [ManualRecordController],
  providers: [ManualRecordService],
})
export class ManualRecordModule {}
