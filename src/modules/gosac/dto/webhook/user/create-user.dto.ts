import { IsBoolean, IsDateString, IsEmail, IsInt , IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateUserDto {
    @IsInt()
    id: number;

    @IsOptional()
    @IsString()
    name: string | null;

    @IsOptional()
    @IsEmail()
    email: string | null;

    @IsOptional()
    @IsString()
    passwordHash: string | null;

    @IsOptional()
    @IsInt()
    tokenVersion: number | null;

    @IsOptional()
    @IsString()
    profileSlug: string | null;

    @IsOptional()
    @IsString()
    username: string | null;

    @IsOptional()
    @IsString()
    avatar: string | null;

    @IsOptional()
    @IsBoolean()
    showAllQueuesMessages: boolean | null;

    @IsOptional()
    @IsBoolean()
    active: boolean | null;

    @IsOptional()
    @IsNumber()
    limitTickets: number | null;

    @IsOptional()
    @IsNumber()
    limitTicketsOpening: number | null;

    @IsOptional()
    @IsString()
    cpf: string | null;

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
    userNotification: string | null;

    @IsOptional()
    @IsInt()
    isManager: number | null;

    @IsOptional()
    @IsInt()
    defaultQueueId: number | null;

    @IsOptional()
    @IsString()
    token: string | null;

    @IsOptional()
    @IsBoolean()
    viewAllGroups: boolean | null;

    @IsOptional()
    @IsString()
    limitTicketsOpeningType: string | null;

    @IsOptional()
    @IsBoolean()
    limitTicketsOpeningNotification: boolean | null;

    @IsOptional()
    @IsBoolean()
    limitTicketsNotification: boolean | null;

    @IsOptional()
    @IsString()
    logUsersAccess: string | null;

    @IsOptional()
    @IsDateString()
    createdAt: string | null;

    @IsOptional()
    @IsDateString()
    updatedAt: string | null;

    @IsOptional()
    @IsDateString()
    deletedAt: string | null;
}