import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GosacService } from './gosac.service';
import { CreateMessageDto } from './dto/message/create-message.dto';
import { CreateTicketDto } from './dto/ticket/create-ticket.dto';

@Controller('gosac')
export class GosacController {
  constructor(private readonly gosacService: GosacService) {}

  @Post('message_create')
  message_create(@Body() createMessageDto) {
    console.log('Message: ', createMessageDto);
    console.log('----------------------------------------------');
    console.log('Ticket: ', createMessageDto.data.ticket);
    console.log('----------------------------------------------');
    return this.gosacService.createMessage(createMessageDto);
  }

  @Post('message_update')
  message_update(@Body() updateMessageDto: any) {
    console.log(updateMessageDto);
    // return this.gosacService.update(gosacDto);
  }

  @Post('ticket_create')
  ticket_create(@Body() createTicketDto: CreateTicketDto) {
    console.log(createTicketDto);
    // return this.gosacService.create(createTicketDto);
  }

}
