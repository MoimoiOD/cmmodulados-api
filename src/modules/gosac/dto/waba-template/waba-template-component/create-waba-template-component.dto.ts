import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateWabaComponentButtonDto } from "../waba-component-button/create-waba-component-button.dto";
import { CreateWabaVariablesDescriptionsDto } from "../waba-variables-descriptions/create-waba-variables-descriptions.dto";

export class CreateWabaTemplateComponentDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  wabaTemplateId: number | null;

  @IsOptional()
  @IsString()
  cType: string | null;

  @IsOptional()
  @IsString()
  format?: string | null;

  @IsOptional()
  @IsString()
  example?: string | null;

  @IsOptional()
  @IsString()
  text: string | null;

  @ValidateNested()
  @Type(() => CreateWabaComponentButtonDto)
  wabaComponentButton?: CreateWabaComponentButtonDto | null;

  @ValidateNested()
  @Type(() => CreateWabaVariablesDescriptionsDto)
  wabaVariablesDescriptions?: CreateWabaVariablesDescriptionsDto | null;
}
