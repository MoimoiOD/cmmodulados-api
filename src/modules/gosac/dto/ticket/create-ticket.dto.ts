import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  unreadMessages: number;

  @IsString()
  @IsOptional()
  lastMessage?: string;

  @IsBoolean()
  isGroup: boolean;

  @IsNumber()
  userId: number;

  @IsNumber()
  contactId: number;

  @IsString()
  protocol: string;

  @IsDateString()
  @IsOptional()
  lastMessageAt?: string;

  @IsDateString()
  @IsOptional()
  closedAt?: string;
}
