import { IsArray, IsOptional } from "class-validator";

export class CreateWabaVariablesDescriptionsDto {
  @IsArray()
  @IsOptional()
  wabaVariablesDescriptions?: any[] | null;
}
