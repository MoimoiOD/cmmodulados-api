import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateQueueDto {
    @IsInt()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsString()
    greetingMessage: string;

    @IsString()
    greetingArchive: string;

    @IsInt()
    order: number;

    @IsInt()
    defaultUserId: number;

    @IsBoolean()
    autoClose: boolean;

    @IsBoolean()
    noEvaluation: boolean;

    @IsBoolean()
    returnMainMenu: boolean;

    @IsDateString()
    createdAt: string;

    @IsDateString()
    updatedAt: string;

    @IsOptional()
    @IsDateString()
    deletedAt: string | null;
}
