import { Injectable } from '@nestjs/common';
import { CreateAutoRecordDto } from './dto/create-auto-record.dto';
import { UpdateAutoRecordDto } from './dto/update-auto-record.dto';

@Injectable()
export class AutoRecordService {
  create(createAutoRecordDto: CreateAutoRecordDto) {
    return 'This action adds a new autoRecord';
  }

  findAll() {
    return `This action returns all autoRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autoRecord`;
  }

  update(id: number, updateAutoRecordDto: UpdateAutoRecordDto) {
    return `This action updates a #${id} autoRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} autoRecord`;
  }
}
