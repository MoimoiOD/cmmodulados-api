import { IsArray, IsOptional } from "class-validator";

export class CreateWabaComponentButtonDto {
  @IsArray()
  @IsOptional()
  wabaComponentButton?: any[] | null;
}
