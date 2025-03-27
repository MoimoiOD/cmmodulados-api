import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsInt, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateConnectionDto } from "./connection/create-connection.dto";
import { CreateWabaTemplateComponentDto } from "./waba-template-component/create-waba-template-component.dto";

export class CreateWabaTemplateDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  waba_id: string | null;

  @IsOptional()
  @IsString()
  name: string | null;

  @IsOptional()
  @IsString()
  category: string | null;

  @IsOptional()
  @IsString()
  language: string | null;

  @IsOptional()
  @IsBoolean()
  approved: boolean | null;

  @IsOptional()
  @IsString()
  rejected_reason: string | null;

  @IsOptional()
  @IsBoolean()
  enabled: boolean | null;

  @IsOptional()
  @IsInt()
  connectionId: number | null;

  @IsOptional()
  @IsString()
  namespace: string | null;

  @IsOptional()
  @IsString()
  createdAt: string | null;

  @IsOptional()
  @IsString()
  updatedAt: string | null;

  @ValidateNested()
  @Type(() => CreateConnectionDto)
  connection: CreateConnectionDto | null;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateWabaTemplateComponentDto)
  wabaTemplateComponents: CreateWabaTemplateComponentDto[] | null;
}
