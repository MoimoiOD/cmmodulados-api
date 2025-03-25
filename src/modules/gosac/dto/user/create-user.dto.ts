import { IsBoolean, IsDateString, IsEmail, IsInt , IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateUserDto {
    @IsInt()
    id: number;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    passwordHash: string;

    @IsOptional()
    @IsInt()
    tokenVersion: number;

    @IsOptional()
    @IsString()
    profileSlug: string;

    @IsOptional()
    @IsString()
    username: string;

    @IsOptional()
    @IsString()
    avatar: string | null;

    @IsOptional()
    @IsBoolean()
    showAllQueuesMessages: boolean;

    @IsOptional()
    @IsBoolean()
    active: boolean;

    @IsOptional()
    @IsNumber()
    limitTickets: number | null;

    @IsOptional()
    @IsNumber()
    limitTicketsOpening: number | null;

    @IsOptional()
    @IsString()
    cpf: string;

    @IsOptional()
    @IsString()
    rg: string | null;

    @IsOptional()
    @IsDateString()
    acceptedAt: string | null;

    @IsOptional()
    @IsDateString()
    birthday: string | null;

    @IsOptional()
    @IsDateString()
    changedPasswordAt: string | null;

    @IsOptional()
    @IsString()
    userNotification: string;

    @IsOptional()
    @IsInt()
    isManager: number;

    @IsOptional()
    @IsInt()
    defaultQueueId: number | null;

    @IsOptional()
    @IsString()
    token: string;

    @IsOptional()
    @IsBoolean()
    viewAllGroups: boolean;

    @IsOptional()
    @IsString()
    limitTicketsOpeningType: string;

    @IsOptional()
    @IsBoolean()
    limitTicketsOpeningNotification: boolean;

    @IsOptional()
    @IsBoolean()
    limitTicketsNotification: boolean;

    @IsOptional()
    @IsString()
    logUsersAccess: string;

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