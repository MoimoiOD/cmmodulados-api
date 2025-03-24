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

@Module({
  imports: [TypeOrmModule.forFeature([Message, Contact, Ticket, Queue, User, Whatsapp]),],
  controllers: [GosacController],
  providers: [GosacService],
  exports: [TypeOrmModule],
})
export class GosacModule {}
