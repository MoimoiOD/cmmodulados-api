import { Module } from '@nestjs/common';
import { GoogleDriverService } from './google-driver.service';
import { GoogleDriverController } from './google-driver.controller';

@Module({
  controllers: [GoogleDriverController],
  providers: [GoogleDriverService],
})
export class GoogleDriverModule {}
