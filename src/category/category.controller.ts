import { CategoryService } from './category.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Category } from './entities/category.entity';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @ApiOperation({ summary: 'This endpoint to get all categories' })
  @Get('')
  async getAllCategories(): Promise<Category[]> {
    return this.categoryService.findAllCategories();
  }

  @ApiOperation({ summary: 'This endpoint will create a category' })
  @Post()
  async createCategory(
    @Body() createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    return this.categoryService.createCategory(createCategoryInput);
  }

  @ApiOperation({ summary: 'This endpoint to get category details by id' })
  @Get('/:id')
  async getCategory(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(id);
  }

  @ApiOperation({ summary: 'This endpoint to update category details' })
  @Put('')
  async updateCategory(
    @Body() updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> {
    return this.categoryService.updateCategory(
      updateCategoryInput.id,
      updateCategoryInput,
    );
  }

  @ApiOperation({ summary: 'This endpoint to delete category' })
  @Delete('/:id')
  async removeCategory(@Param('id') id: string): Promise<Category> {
    return this.categoryService.removeCategory(id);
  }
}
