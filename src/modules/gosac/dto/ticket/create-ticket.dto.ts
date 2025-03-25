import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateContactDto } from '../contact/create-contact.dto';
import { CreateQueueDto } from '../queue/create-queue.dto';
import { CreateWhatsappDto } from '../whatsapp/create-whatsapp.dto';
import { CreateUserDto } from '../user/create-user.dto';

export class CreateTicketDto {
    @IsInt()
    id: number;

    @IsOptional()
    @IsString()
    status: string;

    @IsOptional()
    @IsInt()
    unreadMessages: number;

    @IsOptional()
    @IsInt()
    unreadMessages2: number;

    @IsOptional()
    @IsString()
    lastMessage: string;

    @IsOptional()
    @IsBoolean()
    isGroup: boolean;

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
    protocol: string;

    @IsOptional()
    @IsString()
    lastAction: string;

    @IsOptional()
    @IsInt()
    destinationUserId: number | null;

    @IsOptional()
    @IsInt()
    statusBot: number;

    @IsOptional()
    @IsInt()
    syncTotal: number;

    @IsOptional()
    @IsString()
    onMenu: string;

    @IsOptional()
    @IsInt()
    npsValue: number | null;

    @IsOptional()
    @IsDateString()
    closedAt: string | null;

    @IsOptional()
    @IsDateString()
    lastMessageAt: string;

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
    kind: string;

    @IsOptional()
    @IsInt()
    onMenuId: number;

    @IsOptional()
    @IsString()
    window: string | null;

    @IsOptional()
    @IsString()
    closureObservation: string;

    @IsOptional()
    @IsString()
    sourceUrl: string | null;

    @IsOptional()
    @IsString()
    origin: string;

    @IsOptional()
    @IsDateString()
    createdAt: string;

    @IsOptional()
    @IsDateString()
    updatedAt: string;

    @IsNotEmpty()
    contact: CreateContactDto;

    @IsNotEmpty()
    queue: CreateQueueDto;

    @IsNotEmpty()
    whatsapp: CreateWhatsappDto;

    @IsNotEmpty()
    user: CreateUserDto;
}
