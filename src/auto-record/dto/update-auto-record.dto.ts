import { PartialType } from '@nestjs/mapped-types';
import { CreateAutoRecordDto } from './create-auto-record.dto';

export class UpdateAutoRecordDto extends PartialType(CreateAutoRecordDto) {}
