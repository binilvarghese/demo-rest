import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { ProductResponse } from '../../product/dto/product-response'

export class CategoryResponse {

    @ApiProperty()
    @IsOptional()
    id: string;

    @ApiProperty()
    @IsOptional()
    parentId: string;

    @ApiProperty()
    @IsOptional()
    name: string;

    @ApiProperty()
    @IsOptional()
    status: string;

    @ApiProperty()
    @IsOptional()
    imageKey: string;

    @ApiProperty()
    @IsOptional()
    level: number;

    @ApiProperty()
    @IsOptional()
    products: ProductResponse[];

}
