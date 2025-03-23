import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoogleDriverService } from './google-driver.service';
import { CreateGoogleDriverDto } from './dto/create-google-driver.dto';
import { UpdateGoogleDriverDto } from './dto/update-google-driver.dto';

@Controller('google-driver')
export class GoogleDriverController {
  constructor(private readonly googleDriverService: GoogleDriverService) {}

  @Post()
  create(@Body() createGoogleDriverDto: CreateGoogleDriverDto) {
    return this.googleDriverService.create(createGoogleDriverDto);
  }

  @Get()
  findAll() {
    return this.googleDriverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.googleDriverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGoogleDriverDto: UpdateGoogleDriverDto) {
    return this.googleDriverService.update(+id, updateGoogleDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.googleDriverService.remove(+id);
  }
}
