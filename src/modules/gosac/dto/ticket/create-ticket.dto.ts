import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateContactDto } from '../contact/create-contact.dto';
import { CreateQueueDto } from '../queue/create-queue.dto';
import { CreateWhatsappDto } from '../whatsapp/create-whatsapp.dto';
import { CreateUserDto } from '../user/create-user.dto';
import { Type } from 'class-transformer';

export class CreateTicketDto {
    @IsInt()
    id: number;

    @IsOptional()
    @IsString()
    status: string | null;

    @IsOptional()
    @IsInt()
    unreadMessages: number | null;

    @IsOptional()
    @IsInt()
    unreadMessages2: number | null;

    @IsOptional()
    @IsString()
    lastMessage: string | null;

    @IsOptional()
    @IsBoolean()
    isGroup: boolean | null;

    @IsOptional()
    @IsInt()
    userId: number;

    @IsOptional()
    @IsInt()
    contactId: number;

    @IsOptional()
    @IsInt()
    whatsappId: number;

    @IsOptional()
    @IsInt()
    queueId: number;

    @IsOptional()
    @IsString()
    protocol: string | null;

    @IsOptional()
    @IsString()
    lastAction: string | null;

    @IsOptional()
    @IsInt()
    destinationUserId: number | null;

    @IsOptional()
    @IsInt()
    statusBot: number | null;

    @IsOptional()
    @IsInt()
    syncTotal: number | null;

    @IsOptional()
    @IsString()
    onMenu: string | null;

    @IsOptional()
    @IsInt()
    npsValue: number | null;

    @IsOptional()
    @IsDateString()
    closedAt: string | null;

    @IsOptional()
    @IsDateString()
    lastMessageAt: string | null;

    @IsOptional()
    @IsInt()
    departmentId: number | null;

    @IsOptional()
    @IsBoolean()
    imported: boolean | null;

    @IsOptional()
    @IsInt()
    transmissionId: number | null;

    @IsOptional()
    @IsString()
    kind: string | null;

    @IsOptional()
    @IsInt()
    onMenuId: number | null;

    @IsOptional()
    @IsString()
    window: string | null;

    @IsOptional()
    @IsString()
    closureObservation: string | null;

    @IsOptional()
    @IsString()
    sourceUrl: string | null;

    @IsOptional()
    @IsString()
    origin: string | null;

    @IsOptional()
    @IsDateString()
    createdAt: string | null;

    @IsOptional()
    @IsDateString()
    updatedAt: string | null;

    @ValidateNested()
    @Type(() => CreateContactDto)
    contact: CreateContactDto | null;

    @ValidateNested()
    @Type(() => CreateQueueDto)
    queue: CreateQueueDto | null;

    @ValidateNested()
    @Type(() => CreateWhatsappDto)
    whatsapp: CreateWhatsappDto | null;

    @ValidateNested()
    @Type(() => CreateUserDto)
    user: CreateUserDto | null;
}
