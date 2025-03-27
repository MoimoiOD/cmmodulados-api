import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateQueueDto {
    @IsInt()
    id: number;

    @IsOptional()
    @IsString()
    name: string | null;

    @IsOptional()
    @IsString()
    color: string | null;

    @IsOptional()
    @IsString()
    greetingMessage: string | null;

    @IsOptional()
    @IsString()
    greetingArchive: string | null;

    @IsOptional()
    @IsInt()
    order: number | null;

    @IsOptional()
    @IsInt()
    defaultUserId: number | null;

    @IsOptional()
    @IsBoolean()
    autoClose: boolean | null;

    @IsOptional()
    @IsBoolean()
    noEvaluation: boolean | null;

    @IsOptional()
    @IsBoolean()
    returnMainMenu: boolean | null;

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
