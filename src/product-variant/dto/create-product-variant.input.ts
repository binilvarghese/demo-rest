import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductVariantInput {
  @ApiProperty()
  @IsNotEmpty()
  productId: string;
  @ApiProperty()
  @IsNotEmpty()
  currencyCode: string;
  @ApiProperty()
  @IsNotEmpty()
  weight: number;
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  msrp: number;
  @ApiProperty()
  @IsNotEmpty()
  uom: string;
  @ApiProperty()
  @IsNotEmpty()
  imageKey: string;
}
