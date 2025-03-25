import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateQueueDto {
    @IsInt()
    id: number;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    color: string;

    @IsOptional()
    @IsString()
    greetingMessage: string;

    @IsOptional()
    @IsString()
    greetingArchive: string;

    @IsOptional()
    @IsInt()
    order: number;

    @IsOptional()
    @IsInt()
    defaultUserId: number;

    @IsOptional()
    @IsBoolean()
    autoClose: boolean;

    @IsOptional()
    @IsBoolean()
    noEvaluation: boolean;

    @IsOptional()
    @IsBoolean()
    returnMainMenu: boolean;

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
