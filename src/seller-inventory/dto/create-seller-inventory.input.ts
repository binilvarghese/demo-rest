import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSellerInventoryInput {
  @ApiProperty()
  @IsNotEmpty()
  productVariantId: string;

  @ApiProperty()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  msrp: number;

  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
