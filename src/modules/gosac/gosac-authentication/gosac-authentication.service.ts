import { Injectable } from '@nestjs/common';
import { CreateGosacAuthenticationDto } from './dto/create-gosac-authentication.dto';
import { UpdateGosacAuthenticationDto } from './dto/update-gosac-authentication.dto';

@Injectable()
export class GosacAuthenticationService {
  create(createGosacAuthenticationDto: CreateGosacAuthenticationDto) {
    return 'This action adds a new gosacAuthentication';
  }

  findAll() {
    return `This action returns all gosacAuthentication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gosacAuthentication`;
  }

  update(id: number, updateGosacAuthenticationDto: UpdateGosacAuthenticationDto) {
    return `This action updates a #${id} gosacAuthentication`;
  }

  remove(id: number) {
    return `This action removes a #${id} gosacAuthentication`;
  }
}
