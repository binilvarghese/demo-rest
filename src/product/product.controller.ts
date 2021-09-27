import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Category } from '../category/entities/category.entity';
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @ApiOperation({ summary: 'This endpoint will create a product' })
  @Post()
  async createProduct(
    @Body() createProductInput: CreateProductInput,
  ): Promise<Product> {
    return this.productService.createProduct(createProductInput);
  }

  @ApiOperation({ summary: 'This endpoint to get all products' })
  @Get('')
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findAllProducts();
  }

  @ApiOperation({ summary: 'This endpoint to get product details by id' })
  @Get('/:id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @ApiOperation({ summary: 'This endpoint to update product details' })
  @Put('')
  async updateProduct(
    @Body() updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    return this.productService.updateProduct(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @ApiOperation({ summary: 'This endpoint to delete product' })
  @Delete('/:id')
  async removeProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.removeProduct(id);
  }
}
