import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateContactDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  profilePicUrl?: string;

  @IsBoolean()
  isGroup: boolean;

  @IsBoolean()
  hasWhatsapp: boolean;

  @IsBoolean()
  hasTelegram: boolean;

  @IsNumber()
  @IsOptional()
  defaultUserId?: number;

  @IsNumber()
  @IsOptional()
  defaultQueueId?: number;

  @IsString()
  @IsOptional()
  observation?: string;

  @IsString()
  @IsOptional()
  document?: string;

  @IsString()
  @IsOptional()
  contract?: string;

  @IsString()
  @IsOptional()
  value?: string;

  @IsString()
  @IsOptional()
  kind?: string;

  @IsBoolean()
  @IsOptional()
  imported?: boolean;

  @IsBoolean()
  @IsOptional()
  favorite?: boolean;

  @IsString()
  @IsOptional()
  whatsAppId?: string;

  @IsString()
  @IsOptional()
  cpf?: string;

  @IsString()
  @IsOptional()
  instagram?: string;

  @IsString()
  @IsOptional()
  linkedIn?: string;

  @IsString()
  @IsOptional()
  company?: string;

  @IsString()
  @IsOptional()
  cnpj?: string;

  @IsString()
  @IsOptional()
  validity?: string;

  @IsString()
  @IsOptional()
  telegramId?: string;

  @IsString()
  @IsOptional()
  telegramUsername?: string;

  @IsBoolean()
  @IsOptional()
  blacklist?: boolean;

  @IsDateString()
  @IsOptional()
  createdAt?: string;

  @IsDateString()
  @IsOptional()
  updatedAt?: string;
}