import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateWhatsappDto {
    @IsOptional()
    @IsString()
    mediaUrl: string | null;

    @IsInt()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    session: string;

    @IsString()
    @IsNotEmpty()
    qrcode: string;

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsString()
    @IsNotEmpty()
    battery: string;

    @IsBoolean()
    plugged: boolean;

    @IsInt()
    defaultQueueId: number;

    @IsInt()
    retries: number;

    @IsString()
    @IsNotEmpty()
    greetingMessage: string;

    @IsString()
    @IsNotEmpty()
    closeMessage: string;

    @IsString()
    @IsNotEmpty()
    outTimeMessage: string;

    @IsString()
    @IsNotEmpty()
    contingencyMessage: string;

    @IsString()
    greetingArchive: string;

    @IsOptional()
    @IsString()
    endContingencyMessage: string | null;

    @IsBoolean()
    isDefault: boolean;

    @IsString()
    @IsNotEmpty()
    startTime: string;

    @IsString()
    @IsNotEmpty()
    finishTime: string;

    @IsBoolean()
    sum: boolean;

    @IsBoolean()
    mon: boolean;

    @IsBoolean()
    tue: boolean;

    @IsBoolean()
    wed: boolean;

    @IsBoolean()
    thu: boolean;

    @IsBoolean()
    fri: boolean;

    @IsBoolean()
    sat: boolean;

    @IsOptional()
    @IsDateString()
    resetAt: string | null;

    @IsDateString()
    syncAt: string;

    @IsInt()
    syncPercent: number;

    @IsBoolean()
    enabled: boolean;

    @IsDateString()
    startedAt: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsOptional()
    @IsString()
    apiId: string | null;

    @IsOptional()
    @IsString()
    apiHash: string | null;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsOptional()
    @IsString()
    secretCode: string | null;

    @IsOptional()
    @IsString()
    password: string | null;

    @IsOptional()
    @IsString()
    username: string | null;

    @IsOptional()
    @IsString()
    apiKey: string | null;

    @IsOptional()
    @IsString()
    voipToken: string | null;

    @IsOptional()
    @IsString()
    pageId: string | null;

    @IsOptional()
    @IsString()
    accountRestriction: string | null;

    @IsOptional()
    @IsInt()
    accountViolationCount: number | null;

    @IsOptional()
    @IsInt()
    messagingLimit: number | null;

    @IsBoolean()
    npsEnabled: boolean;

    @IsString()
    @IsNotEmpty()
    npsMessage: string;

    @IsOptional()
    @IsString()
    provider: string | null;

    @IsBoolean()
    settedWebHook: boolean;

    @IsBoolean()
    enableZeroMenu: boolean;

    @IsInt()
    openingHoursId: number;

    @IsDateString()
    qrCreatedAt: string;

    @IsOptional()
    @IsString()
    host: string | null;

    @IsOptional()
    @IsInt()
    port: number | null;

    @IsBoolean()
    tls: boolean;

    @IsDateString()
    createdAt: string;

    @IsDateString()
    updatedAt: string;

    @IsOptional()
    @IsDateString()
    deletedAt: string | null;
}
