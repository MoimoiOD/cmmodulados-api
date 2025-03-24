import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GosacService } from './gosac.service';
import { CreateMessageDto } from './dto/message/create-message.dto';
import { CreateTicketDto } from './dto/ticket/create-ticket.dto';

@Controller('gosac')
export class GosacController {
  constructor(private readonly gosacService: GosacService) {}

  @Post('message_create')
  message_create(@Body() createMessageDto: CreateMessageDto) {
    return this.gosacService.create(createMessageDto);
  }

  // @Post('message_update')
  // message_update(@Body() updateMessageDto: any) {
  //   console.log(updateMessageDto);
  //   // return this.gosacService.update(gosacDto);
  // }

}
