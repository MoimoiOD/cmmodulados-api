import { Module } from '@nestjs/common';
import { GosacService } from './gosac.service';
import { GosacController } from './gosac.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Contact } from './entities/contact.entity';
import { Ticket } from './entities/ticket.entity';
import { Queue } from './entities/queue.entity';
import { User } from './entities/user.entity';
import { Whatsapp } from './entities/whatsapp.entity';
import { GoogleDriverModule } from '../google-driver/google-driver.module';
import { WabaTemplateService } from './gosac-service/waba-template.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message, Contact, Ticket, Queue, User, Whatsapp]),
GoogleDriverModule],
  controllers: [GosacController],
  providers: [GosacService, GosacService, WabaTemplateService],
  exports: [TypeOrmModule],
})
export class GosacModule {}
