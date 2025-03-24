import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateContactDto } from '../contact/create-contact.dto';
import { CreateQueueDto } from '../queue/create-queue.dto';
import { CreateWhatsappDto } from '../whatsapp/create-whatsapp.dto';
import { CreateUserDto } from '../user/create-user.dto';

export class CreateTicketDto {
    @IsInt()
    id: number;

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsInt()
    unreadMessages: number;

    @IsInt()
    unreadMessages2: number;

    @IsString()
    @IsNotEmpty()
    lastMessage: string;

    @IsBoolean()
    isGroup: boolean;

    @IsInt()
    userId: number;

    @IsInt()
    contactId: number;

    @IsInt()
    whatsappId: number;

    @IsInt()
    queueId: number;

    @IsString()
    @IsNotEmpty()
    protocol: string;

    @IsString()
    @IsNotEmpty()
    lastAction: string;

    @IsOptional()
    @IsInt()
    destinationUserId: number | null;

    @IsInt()
    statusBot: number;

    @IsInt()
    syncTotal: number;

    @IsString()
    @IsNotEmpty()
    onMenu: string;

    @IsOptional()
    @IsInt()
    npsValue: number | null;

    @IsOptional()
    @IsDateString()
    closedAt: string | null;

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

    @IsString()
    @IsNotEmpty()
    kind: string;

    @IsInt()
    onMenuId: number;

    @IsOptional()
    @IsString()
    window: string | null;

    @IsString()
    @IsNotEmpty()
    closureObservation: string;

    @IsOptional()
    @IsString()
    sourceUrl: string | null;

    @IsString()
    @IsNotEmpty()
    origin: string;

    @IsDateString()
    createdAt: string;

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
