import { Injectable } from '@nestjs/common';
import { CreateManualRecordDto } from './dto/create-manual-record.dto';
import { UpdateManualRecordDto } from './dto/update-manual-record.dto';

@Injectable()
export class ManualRecordService {
  create(createManualRecordDto: CreateManualRecordDto) {
    return 'This action adds a new manualRecord';
  }

  findAll() {
    return `This action returns all manualRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} manualRecord`;
  }

  update(id: number, updateManualRecordDto: UpdateManualRecordDto) {
    return `This action updates a #${id} manualRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} manualRecord`;
  }
}
