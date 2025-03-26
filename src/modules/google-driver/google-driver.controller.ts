import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoogleDriverService } from './google-driver.service';
import { CreateGoogleDriverDto } from './dto/create-google-driver.dto';
import { UpdateGoogleDriverDto } from './dto/update-google-driver.dto';

@Controller('google-driver')
export class GoogleDriverController {
  constructor(private readonly googleDriverService: GoogleDriverService) {}

  @Post('create-folder')
  async createFolder(@Body('name') folderName: string, @Body('parentId') parentFolderId?: string) {
    const folderId = await this.googleDriverService.createFolder(folderName, parentFolderId);
    return { folderId };
  }
}
