import { Module } from '@nestjs/common';
import { GosacAuthenticationService } from './gosac-authentication.service';
import { GosacAuthenticationController } from './gosac-authentication.controller';

@Module({
  controllers: [GosacAuthenticationController],
  providers: [GosacAuthenticationService],
})
export class GosacAuthenticationModule {}
