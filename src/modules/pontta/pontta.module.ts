import { Module } from '@nestjs/common';
import { PonttaService } from './pontta.service';
import { PonttaController } from './pontta.controller';

@Module({
  controllers: [PonttaController],
  providers: [PonttaService],
})
export class PonttaModule {}
