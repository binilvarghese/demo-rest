import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateProductInput {
  @ApiProperty()
  @IsNotEmpty()
  categoryId: string;
  @ApiProperty()
  @IsNotEmpty()
  title: string;
  @ApiProperty()
  @IsNotEmpty()
  description: string;
  @ApiProperty()
  @IsNotEmpty()
  status: string;
  @ApiProperty()
  @IsNotEmpty()
  imageKey: string;
  @ApiProperty()
  @IsNotEmpty()
  isTaxApplicable: boolean;
  @ApiProperty()
  @IsNotEmpty()
  isSellerProduct: boolean;
}
