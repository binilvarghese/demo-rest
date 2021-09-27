import { ProductVariantService } from './product-variant.service';
import { ProductVariant } from './entities/product-variant.entity';
import { CreateProductVariantInput } from './dto/create-product-variant.input';
import { UpdateProductVariantInput } from './dto/update-product-variant.input';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('product-variant')
@ApiTags('Product Variant')
export class ProductVariantController {
  constructor(private readonly productVariantService: ProductVariantService) { }

  @ApiOperation({ summary: 'This endpoint will create a product variant' })
  @Post()
  async createProductVariant(
    @Body() createProductVariantInput: CreateProductVariantInput,
  ): Promise<ProductVariant> {
    return this.productVariantService.createProductVariant(
      createProductVariantInput,
    );
  }

  @ApiOperation({ summary: 'This endpoint to get all product variants' })
  @Get('')
  async getAllProductVariants(): Promise<ProductVariant[]> {
    return this.productVariantService.findAllProductVariants();
  }

  @ApiOperation({
    summary: 'This endpoint to get product variant details by id',
  })
  @Get('/:id')
  async getProductVariant(@Param('id') id: string): Promise<ProductVariant> {
    return this.productVariantService.findOne(id);
  }

  @ApiOperation({ summary: 'This endpoint to update product variant details' })
  @Put('')
  async updateProductVariant(
    @Body() updateProductVariantInput: UpdateProductVariantInput,
  ): Promise<ProductVariant> {
    return this.productVariantService.updateProductVariant(
      updateProductVariantInput.id,
      updateProductVariantInput,
    );
  }

  @ApiOperation({ summary: 'This endpoint to delete product variant' })
  @Delete('/:id')
  async removeProductVariant(@Param('id') id: string): Promise<ProductVariant> {
    return this.productVariantService.removeProductVariant(id);
  }
}
