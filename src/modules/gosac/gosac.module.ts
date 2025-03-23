import { Module } from '@nestjs/common';
import { GosacService } from './gosac.service';
import { GosacController } from './gosac.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Contact } from './entities/contact.entity';
import { Ticket } from './entities/ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message, Contact, Ticket]),],
  controllers: [GosacController],
  providers: [GosacService],
  exports: [TypeOrmModule],
})
export class GosacModule {}
