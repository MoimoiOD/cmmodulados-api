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
  @IsNotEmpty()
  id: string;

  @IsInt()
  ack: number;

  @IsBoolean()
  read: boolean;

  @IsBoolean()
  fromMe: boolean;

  @IsString()
  @IsNotEmpty()
  body: string;

  @IsString()
  @IsNotEmpty()
  mediaType: string;

  @IsString()
  @IsNotEmpty()
  messageId: string;

  @IsInt()
  queueId: number;

  @IsOptional()
  @IsInt()
  templateId: number | null;

  @IsBoolean()
  isDeleted: boolean;

  @IsDateString()
  createdAt: string;

  @IsDateString()
  updatedAt: string;

  @IsOptional()
  @IsString()
  quotedMsgId: string | null;

  @IsInt()
  ticketId: number;

  @IsInt()
  contactId: number;

  @IsInt()
  groupContactId: number;

  @IsBoolean()
  fromGroup: boolean;

  @IsInt()
  connectionId: number;

  @IsOptional()
  @IsInt()
  vcardContactId: number | null;

  @IsBoolean()
  isForwarded: boolean;

  @IsOptional()
  @IsInt()
  senderUserId: number | null;

  @IsOptional()
  @IsInt()
  destinationUserId: number | null;

  @IsBoolean()
  sent: boolean;

  @IsOptional()
  @IsInt()
  imageId: number | null;

  @IsOptional()
  @IsString()
  errorMessage: string | null;

  @IsString()
  @IsNotEmpty()
  kind: string;

  @IsOptional()
  @IsInt()
  transmissionId: number | null;

  @IsBoolean()
  downloaded: boolean;

  @IsOptional()
  @IsString()
  vCardContact: string | null;

  @IsOptional()
  @IsString()
  quotedMsg: string | null;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateContactDto)
  contact: CreateContactDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateTicketDto)
  ticket: CreateTicketDto;
}