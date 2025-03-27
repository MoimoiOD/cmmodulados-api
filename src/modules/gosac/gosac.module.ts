import { Module } from '@nestjs/common';
import { GosacService } from './gosac.service';
import { GosacController } from './gosac.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/webhook/message.entity';
import { Contact } from './entities/webhook/contact.entity';
import { Ticket } from './entities/webhook/ticket.entity';
import { Queue } from './entities/webhook/queue.entity';
import { User } from './entities/webhook/user.entity';
import { Whatsapp } from './entities/webhook/whatsapp.entity';
import { GoogleDriverModule } from '../google-driver/google-driver.module';
import { WabaTemplateService } from './gosac-service/waba-template.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message, Contact, Ticket, Queue, User, Whatsapp]),
    GoogleDriverModule],
  controllers: [GosacController],
  providers: [GosacService, GosacService, WabaTemplateService],
  exports: [TypeOrmModule],
})
export class GosacModule { }
