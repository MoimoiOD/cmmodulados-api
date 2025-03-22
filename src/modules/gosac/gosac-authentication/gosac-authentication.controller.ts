import { Controller, Headers, Post, Body } from '@nestjs/common';
import { GosacAuthenticationService } from './gosac-authentication.service';

@Controller('gosac-authentication')
export class GosacAuthenticationController {
  constructor(private readonly gosacAuthenticationService: GosacAuthenticationService) {}

  @Post()
  handleWebhook(@Body() data: any, @Headers() headers: any) {
    console.log('Webhook recebido:', data);
    // console.log('Headers:', headers);
    return { message: 'Webhook recebido com sucesso' };
  }
}
