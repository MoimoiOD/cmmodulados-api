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
  ack: number | null;

  @IsOptional()
  @IsBoolean()
  read: boolean | null;

  @IsOptional()
  @IsBoolean()
  fromMe: boolean | null;

  @IsOptional()
  @IsString()
  body: string | null;

  @IsOptional()
  @IsString()
  mediaType: string | null;

  @IsOptional()
  @IsInt()
  messageId: string | null;

  @IsOptional()
  @IsInt()
  queueId: number | null;

  @IsOptional()
  @IsInt()
  templateId: number | null;

  @IsOptional()
  @IsBoolean()
  isDeleted: boolean | null;

  @IsOptional()
  @IsDateString()
  createdAt: string | null;

  @IsOptional()
  @IsDateString()
  updatedAt: string | null;

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
  groupContactId: number | null;

  @IsOptional()
  @IsBoolean()
  fromGroup: boolean | null;

  @IsOptional()
  @IsInt()
  connectionId: number | null;

  @IsOptional()
  @IsInt()
  vcardContactId: number | null;

  @IsOptional()
  @IsBoolean()
  isForwarded: boolean | null;

  @IsOptional()
  @IsInt()
  senderUserId: number | null;

  @IsOptional()
  @IsInt()
  destinationUserId: number | null;

  @IsOptional()
  @IsBoolean()
  sent: boolean | null;

  @IsOptional()
  @IsInt()
  imageId: number | null;

  @IsOptional()
  @IsString()
  errorMessage: string | null;

  @IsOptional()
  @IsString()
  kind: string | null;

  @IsOptional()
  @IsInt()
  transmissionId: number | null;

  @IsOptional()
  @IsBoolean()
  downloaded: boolean | null;

  @IsOptional()
  @IsString()
  vCardContact: string | null;

  @IsOptional()
  @IsString()
  quotedMsg: string | null;

  @ValidateNested()
  @Type(() => CreateContactDto)
  contact: CreateContactDto | null;

  @ValidateNested()
  @Type(() => CreateTicketDto)
  ticket: CreateTicketDto | null;
}