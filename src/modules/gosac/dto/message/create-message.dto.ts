import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateMessageDataDto } from './create-message-data.dto';

export class CreateMessageDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateMessageDataDto)
  data: CreateMessageDataDto;
}