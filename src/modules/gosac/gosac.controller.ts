import { Controller, Post, Body } from '@nestjs/common';
import { GosacService } from './gosac.service';
import { CreateMessageDto } from './dto/webhook/message/create-message.dto';

@Controller('gosac')
export class GosacController {
  constructor(private readonly gosacService: GosacService) { }

  @Post('message_create')
  message_create(@Body() createMessageDto: CreateMessageDto) {
    // console.log('Message: ', createMessageDto.data);
    // console.log('Contact Message: ', createMessageDto.data.contact);
    // console.log('Ticket Message: ', createMessageDto.data.ticket);
    // console.log('User: ', createMessageDto.data.ticket?.user);
    // console.log('Queue: ', createMessageDto.data.ticket?.queue);
    // console.log('Contact', createMessageDto.data.ticket?.contact);
    // console.log('Whatsapp: ', createMessageDto.data.ticket?.whatsapp);
    return this.gosacService.create(createMessageDto);
  }

  // @Post('message_update')
  // message_update(@Body() updateMessageDto: any) {
  //   console.log(updateMessageDto);
  //   // return this.gosacService.update(gosacDto);
  // }

}
