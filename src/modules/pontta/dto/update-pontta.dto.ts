import { PartialType } from '@nestjs/mapped-types';
import { CreatePonttaDto } from './create-pontta.dto';

export class UpdatePonttaDto extends PartialType(CreatePonttaDto) {}
