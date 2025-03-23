import { Type } from 'class-transformer';
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { CreateContactDto } from '../contact/create-contact.dto';
import { CreateTicketDto } from '../ticket/create-ticket.dto';

export class CreateMessageDataDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  ack: number;

  @IsBoolean()
  read: boolean;

  @IsBoolean()
  fromMe: boolean;

  @IsString()
  @IsNotEmpty()
  body: string;

  @IsString()
  mediaType: string;

  @IsString()
  messageId: string;

  @IsNumber()
  queueId: number;

  @IsBoolean()
  isDeleted: boolean;

  @IsDateString()
  createdAt: string;

  @IsDateString()
  updatedAt: string;

  @ValidateNested()
  @Type(() => CreateTicketDto)
  ticket: CreateTicketDto;

  @ValidateNested()
  @Type(() => CreateContactDto)
  contact: CreateContactDto;
}
