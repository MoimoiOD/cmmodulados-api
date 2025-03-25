import { IsBoolean, IsDateString, IsInt,IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateContactDto {
    @IsInt()
    id: number;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    number: string;

    @IsOptional()
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    profilePicUrl: string;

    @IsOptional()
    @IsBoolean()
    isGroup: boolean;

    @IsOptional()
    @IsBoolean()
    hasWhatsapp: boolean;

    @IsOptional()
    @IsBoolean()
    hasTelegram: boolean;

    @IsOptional()
    @IsInt()
    defaultUserId: number | null;

    @IsOptional()
    @IsInt()
    defaultQueueId: number;

    @IsOptional()
    @IsString()
    observation: string | null;

    @IsOptional()
    @IsString()
    document: string | null;

    @IsOptional()
    @IsString()
    contract: string | null;

    @IsOptional()
    @IsNumber()
    value: number | null;

    @IsOptional()
    @IsString()
    kind: string;

    @IsOptional()
    @IsBoolean()
    imported: boolean;

    @IsOptional()
    @IsBoolean()
    favorite: boolean;

    @IsOptional()
    @IsInt()
    whatsAppId: number | null;

    @IsOptional()
    @IsString()
    cpf: string | null;

    @IsOptional()
    @IsString()
    instagram: string | null;

    @IsOptional()
    @IsString()
    linkedIn: string | null;

    @IsOptional()
    @IsString()
    company: string | null;

    @IsOptional()
    @IsString()
    cnpj: string | null;

    @IsOptional()
    @IsDateString()
    validity: string | null;

    @IsOptional()
    @IsInt()
    telegramId: number | null;

    @IsOptional()
    @IsString()
    telegramUsername: string | null;

    @IsOptional()
    @IsBoolean()
    blacklist: boolean;

    @IsOptional()
    @IsDateString()
    createdAt: string;

    @IsOptional()
    @IsDateString()
    updatedAt: string;
}
