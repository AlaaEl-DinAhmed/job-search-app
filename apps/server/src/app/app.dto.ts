import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class JobQueryDto {
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsOptional()
  public cursor = 0;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsOptional()
  public limit = 12;
}
