import { IsBoolean, IsDateString, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateUserDto {
    @IsInt()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    passwordHash: string;

    @IsInt()
    tokenVersion: number;

    @IsString()
    @IsNotEmpty()
    profileSlug: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsOptional()
    @IsString()
    avatar: string | null;

    @IsBoolean()
    showAllQueuesMessages: boolean;

    @IsBoolean()
    active: boolean;

    @IsOptional()
    @IsNumber()
    limitTickets: number | null;

    @IsOptional()
    @IsNumber()
    limitTicketsOpening: number | null;

    @IsString()
    @IsNotEmpty()
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

    @IsString()
    @IsNotEmpty()
    userNotification: string;

    @IsInt()
    isManager: number;

    @IsOptional()
    @IsInt()
    defaultQueueId: number | null;

    @IsString()
    @IsNotEmpty()
    token: string;

    @IsBoolean()
    viewAllGroups: boolean;

    @IsString()
    @IsNotEmpty()
    limitTicketsOpeningType: string;

    @IsBoolean()
    limitTicketsOpeningNotification: boolean;

    @IsBoolean()
    limitTicketsNotification: boolean;

    @IsString()
    @IsNotEmpty()
    logUsersAccess: string;

    @IsDateString()
    createdAt: string;

    @IsDateString()
    updatedAt: string;

    @IsOptional()
    @IsDateString()
    deletedAt: string | null;
}