import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateSellerInventoryInput {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
  @ApiProperty()
  @IsOptional()
  productVariantId: string;
  @ApiProperty()
  @IsOptional()
  quantity: number;
  @ApiProperty()
  @IsOptional()
  msrp: number;
  @ApiProperty()
  @IsOptional()
  name: string;
}
