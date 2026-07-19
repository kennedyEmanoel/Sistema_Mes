import { PartialType } from '@nestjs/mapped-types';
import { CreateManualRecordDto } from './create-manual-record.dto';

export class UpdateManualRecordDto extends PartialType(CreateManualRecordDto) {}
