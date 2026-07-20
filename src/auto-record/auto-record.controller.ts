import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AutoRecordService } from './auto-record.service';
import { CreateAutoRecordDto } from './dto/create-auto-record.dto';
import { UpdateAutoRecordDto } from './dto/update-auto-record.dto';

@Controller('auto-record')
export class AutoRecordController {
  constructor(private readonly autoRecordService: AutoRecordService) {}

  @Post()
  create(@Body() createAutoRecordDto: CreateAutoRecordDto) {
    return this.autoRecordService.create(createAutoRecordDto);
  }

  @Get()
  findAll() {
    return this.autoRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autoRecordService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAutoRecordDto: UpdateAutoRecordDto,
  ) {
    return this.autoRecordService.update(+id, updateAutoRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autoRecordService.remove(+id);
  }
}
