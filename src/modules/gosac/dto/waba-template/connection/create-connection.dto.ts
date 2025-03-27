import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateConnectionDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  name: string | null;
}
