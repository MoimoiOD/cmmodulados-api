import { Injectable } from '@nestjs/common';
import { CreatePonttaDto } from './dto/create-pontta.dto';
import { UpdatePonttaDto } from './dto/update-pontta.dto';

@Injectable()
export class PonttaService {
  create(createPonttaDto: CreatePonttaDto) {
    return 'This action adds a new pontta';
  }

  findAll() {
    return `This action returns all pontta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pontta`;
  }

  update(id: number, updatePonttaDto: UpdatePonttaDto) {
    return `This action updates a #${id} pontta`;
  }

  remove(id: number) {
    return `This action removes a #${id} pontta`;
  }
}
