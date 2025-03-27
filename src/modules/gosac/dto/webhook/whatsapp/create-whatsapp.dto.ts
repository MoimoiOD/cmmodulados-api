import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateWhatsappDto {
    @IsOptional()
    @IsString()
    mediaUrl: string | null;

    @IsInt()
    id: number;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    session: string;

    @IsOptional()
    @IsString()
    qrcode: string;

    @IsOptional()
    @IsString()
    status: string;

    @IsOptional()
    @IsString()
    battery: string;

    @IsOptional()
    @IsBoolean()
    plugged: boolean;

    @IsOptional()
    @IsInt()
    defaultQueueId: number;

    @IsOptional()
    @IsInt()
    retries: number;

    @IsOptional()
    @IsString()
    greetingMessage: string;

    @IsOptional()
    @IsString()
    closeMessage: string;

    @IsOptional()
    @IsString()
    outTimeMessage: string;

    @IsOptional()
    @IsString()
    contingencyMessage: string;

    @IsOptional()
    @IsString()
    greetingArchive: string;

    @IsOptional()
    @IsString()
    endContingencyMessage: string | null;

    @IsOptional()
    @IsBoolean()
    isDefault: boolean;

    @IsOptional()
    @IsString()
    startTime: string;

    @IsOptional()
    @IsString()
    finishTime: string;

    @IsOptional()
    @IsBoolean()
    sum: boolean;

    @IsOptional()
    @IsBoolean()
    mon: boolean;

    @IsOptional()
    @IsBoolean()
    tue: boolean;

    @IsOptional()
    @IsBoolean()
    wed: boolean;

    @IsOptional()
    @IsBoolean()
    thu: boolean;

    @IsOptional()
    @IsBoolean()
    fri: boolean;

    @IsOptional()
    @IsBoolean()
    sat: boolean;

    @IsOptional()
    @IsDateString()
    resetAt: string | null;

    @IsOptional()
    @IsDateString()
    syncAt: string;

    @IsOptional()
    @IsInt()
    syncPercent: number;

    @IsOptional()
    @IsBoolean()
    enabled: boolean;

    @IsOptional()
    @IsDateString()
    startedAt: string;

    @IsOptional()
    @IsString()
    type: string;

    @IsOptional()
    @IsString()
    apiId: string | null;

    @IsOptional()
    @IsString()
    apiHash: string | null;

    @IsOptional()
    @IsString()
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

    @IsOptional()
    @IsBoolean()
    npsEnabled: boolean;

    @IsOptional()
    @IsString()
    npsMessage: string;

    @IsOptional()
    @IsString()
    provider: string | null;

    @IsOptional()
    @IsBoolean()
    settedWebHook: boolean;

    @IsOptional()
    @IsBoolean()
    enableZeroMenu: boolean;

    @IsOptional()
    @IsInt()
    openingHoursId: number;

    @IsOptional()
    @IsDateString()
    qrCreatedAt: string;

    @IsOptional()
    @IsString()
    host: string | null;

    @IsOptional()
    @IsInt()
    port: number | null;

    @IsOptional()
    @IsBoolean()
    tls: boolean;

    @IsOptional()
    @IsDateString()
    createdAt: string;

    @IsOptional()
    @IsDateString()
    updatedAt: string;

    @IsOptional()
    @IsDateString()
    deletedAt: string | null;
}
