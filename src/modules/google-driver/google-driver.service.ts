import { Injectable } from '@nestjs/common';
import { CreateGoogleDriverDto } from './dto/create-google-driver.dto';
import { UpdateGoogleDriverDto } from './dto/update-google-driver.dto';

@Injectable()
export class GoogleDriverService {
  create(createGoogleDriverDto: CreateGoogleDriverDto) {
    return 'This action adds a new googleDriver';
  }

  findAll() {
    return `This action returns all googleDriver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} googleDriver`;
  }

  update(id: number, updateGoogleDriverDto: UpdateGoogleDriverDto) {
    return `This action updates a #${id} googleDriver`;
  }

  remove(id: number) {
    return `This action removes a #${id} googleDriver`;
  }
}
