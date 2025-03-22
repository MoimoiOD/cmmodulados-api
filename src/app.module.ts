import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GosacAuthenticationModule } from './modules/gosac/gosac-authentication/gosac-authentication.module';

@Module({
  imports: [GosacAuthenticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
