import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateProductVariantInput {
  @IsNotEmpty()
  id: string;
  @ApiProperty()
  @IsOptional()
  productId: string;
  @ApiProperty()
  @IsOptional()
  currencyCode: string;
  @ApiProperty()
  @IsOptional()
  weight: number;
  @ApiProperty()
  @IsOptional()
  name: string;
  @ApiProperty()
  @IsOptional()
  msrp: number;
  @ApiProperty()
  @IsOptional()
  uom: string;
  @ApiProperty()
  @IsOptional()
  imageKey: string;
}
