import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ProductResponse {

    @ApiProperty()
    @IsOptional()
    id: string;

    @ApiProperty()
    @IsOptional()
    categoryId: string;

    @ApiProperty()
    @IsOptional()
    title: string;

    @ApiProperty()
    @IsOptional()
    description: string;

    @ApiProperty()
    @IsOptional()
    imageKey: string;

    @ApiProperty()
    @IsOptional()
    status: number;

    @ApiProperty()
    @IsOptional()
    isTaxApplicable: boolean;

    @ApiProperty()
    @IsOptional()
    isSellerProduct: boolean;

    // @ApiProperty()
    // @IsOptional()
    // productVariants: ProductVariants[];

}
