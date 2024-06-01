
import { PartialType } from '@nestjs/swagger';
import { CreateSeriesDto } from './create-serie.dto';

export class UpdateSeriesDto extends PartialType(CreateSeriesDto) {}
