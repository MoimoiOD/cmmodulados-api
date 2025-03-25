import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateContactDto } from '../contact/create-contact.dto';
import { CreateTicketDto } from '../ticket/create-ticket.dto';

export class CreateMessageDataDto {
  @IsOptional()
  @IsString()
  mediaUrl: string | null;

  @IsOptional()
  @IsString()
  mediaPath: string | null;

  @IsString()
  id: string;

  @IsOptional()
  @IsInt()
  ack: number;

  @IsOptional()
  @IsBoolean()
  read: boolean;

  @IsOptional()
  @IsBoolean()
  fromMe: boolean;

  @IsOptional()
  @IsString()
  body: string;

  @IsOptional()
  @IsString()
  mediaType: string;

  @IsOptional()
  @IsString()
  messageId: string;

  @IsOptional()
  @IsInt()
  queueId: number;

  @IsOptional()
  @IsInt()
  templateId: number | null;

  @IsOptional()
  @IsBoolean()
  isDeleted: boolean;

  @IsOptional()
  @IsDateString()
  createdAt: string;

  @IsOptional()
  @IsDateString()
  updatedAt: string;

  @IsOptional()
  @IsString()
  quotedMsgId: string | null;

  @IsOptional()
  @IsInt()
  ticketId: number;

  @IsOptional()
  @IsInt()
  contactId: number;

  @IsOptional()
  @IsInt()
  groupContactId: number;

  @IsOptional()
  @IsBoolean()
  fromGroup: boolean;

  @IsOptional()
  @IsInt()
  connectionId: number;

  @IsOptional()
  @IsInt()
  vcardContactId: number | null;

  @IsOptional()
  @IsBoolean()
  isForwarded: boolean;

  @IsOptional()
  @IsInt()
  senderUserId: number | null;

  @IsOptional()
  @IsInt()
  destinationUserId: number | null;

  @IsOptional()
  @IsBoolean()
  sent: boolean;

  @IsOptional()
  @IsInt()
  imageId: number | null;

  @IsOptional()
  @IsString()
  errorMessage: string | null;

  @IsOptional()
  @IsString()
  kind: string;

  @IsOptional()
  @IsInt()
  transmissionId: number | null;

  @IsOptional()
  @IsBoolean()
  downloaded: boolean;

  @IsOptional()
  @IsString()
  vCardContact: string | null;

  @IsOptional()
  @IsString()
  quotedMsg: string | null;

  @ValidateNested()
  @Type(() => CreateContactDto)
  contact: CreateContactDto;

  @ValidateNested()
  @Type(() => CreateTicketDto)
  ticket: CreateTicketDto;
}