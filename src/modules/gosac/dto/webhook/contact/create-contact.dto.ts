import { IsBoolean, IsDateString, IsInt,IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateContactDto {
    @IsInt()
    id: number;

    @IsOptional()
    @IsString()
    name: string | null;

    @IsOptional()
    @IsString()
    number: string | null;

    @IsOptional()
    @IsString()
    email: string | null;

    @IsOptional()
    @IsString()
    profilePicUrl: string | null;

    @IsOptional()
    @IsBoolean()
    isGroup: boolean | null;

    @IsOptional()
    @IsBoolean()
    hasWhatsapp: boolean | null;

    @IsOptional()
    @IsBoolean()
    hasTelegram: boolean | null;

    @IsOptional()
    @IsInt()
    defaultUserId: number | null;

    @IsOptional()
    @IsInt()
    defaultQueueId: number | null;

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
    kind: string | null;

    @IsOptional()
    @IsBoolean()
    imported: boolean | null;

    @IsOptional()
    @IsBoolean()
    favorite: boolean | null;

    @IsOptional()
    @IsInt()
    whatsAppId: number | null;

    @IsOptional()
    @IsString()
    cpf: string | null | null;

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
    blacklist: boolean | null;

    @IsOptional()
    @IsDateString()
    createdAt: string | null;

    @IsOptional()
    @IsDateString()
    updatedAt: string | null;
}
