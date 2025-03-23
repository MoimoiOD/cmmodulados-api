import { PartialType } from '@nestjs/mapped-types';
import { CreateGoogleDriverDto } from './create-google-driver.dto';

export class UpdateGoogleDriverDto extends PartialType(CreateGoogleDriverDto) {}
