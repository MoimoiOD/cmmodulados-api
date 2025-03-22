import { PartialType } from '@nestjs/mapped-types';
import { CreateGosacAuthenticationDto } from './create-gosac-authentication.dto';

export class UpdateGosacAuthenticationDto extends PartialType(CreateGosacAuthenticationDto) {}
