import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PonttaService } from './pontta.service';
import { CreatePonttaDto } from './dto/create-pontta.dto';
import { UpdatePonttaDto } from './dto/update-pontta.dto';

@Controller('pontta')
export class PonttaController {
  constructor(private readonly ponttaService: PonttaService) {}

  @Post()
  create(@Body() createPonttaDto: CreatePonttaDto) {
    return this.ponttaService.create(createPonttaDto);
  }

  @Get()
  findAll() {
    return this.ponttaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ponttaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePonttaDto: UpdatePonttaDto) {
    return this.ponttaService.update(+id, updatePonttaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ponttaService.remove(+id);
  }
}
