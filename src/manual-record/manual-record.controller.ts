import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManualRecordService } from './manual-record.service';
import { CreateManualRecordDto } from './dto/create-manual-record.dto';
import { UpdateManualRecordDto } from './dto/update-manual-record.dto';

@Controller('manual-record')
export class ManualRecordController {
  constructor(private readonly manualRecordService: ManualRecordService) {}

  @Post()
  create(@Body() createManualRecordDto: CreateManualRecordDto) {
    return this.manualRecordService.create(createManualRecordDto);
  }

  @Get()
  findAll() {
    return this.manualRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.manualRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManualRecordDto: UpdateManualRecordDto) {
    return this.manualRecordService.update(+id, updateManualRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.manualRecordService.remove(+id);
  }
}
