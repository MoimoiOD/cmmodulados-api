import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateContactDto {
    @IsInt()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    number: string;

    @IsOptional()
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    profilePicUrl: string;

    @IsBoolean()
    isGroup: boolean;

    @IsBoolean()
    hasWhatsapp: boolean;

    @IsBoolean()
    hasTelegram: boolean;

    @IsInt()
    defaultUserId: number | null;

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

    @IsString()
    @IsNotEmpty()
    kind: string;

    @IsBoolean()
    imported: boolean;

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

    @IsBoolean()
    blacklist: boolean;

    @IsDateString()
    createdAt: string;

    @IsDateString()
    updatedAt: string;
}
