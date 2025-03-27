import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateWabaVariablesDescriptionsDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  wabaTemplateCo: number | null;

  @IsOptional()
  @IsString()
  description: string | null;

  @IsOptional()
  @IsString()
  variable: string | null;
  
  @IsOptional()
  @IsString()
  createdAt: string | null;
  
  @IsOptional()
  @IsString()
  updatedAt: string | null;
}
