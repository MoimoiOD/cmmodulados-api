import { IsArray, IsInt, IsOptional, IsString } from "class-validator";

export class CreateWabaComponentButtonDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  cType: string | null;

  @IsOptional()
  @IsString()
  text: string | null;

  @IsOptional()
  @IsString()
  url: string | null;

  @IsOptional()
  @IsString()
  phone_number: string | null;

  @IsOptional()
  @IsString()
  example: string | null;
}
