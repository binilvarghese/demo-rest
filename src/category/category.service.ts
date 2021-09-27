import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) { }

  async createCategory(
    createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    const prod = this.categoryRepository.create(createCategoryInput);
    return this.categoryRepository.save(prod);
  }

  async findAllCategories(): Promise<Category[]> {
    return this.categoryRepository.find({
      relations: [
        'products',
        'products.productVariants',
        'products.productVariants.sellerInventories',
      ],
    });
  }

  async findOne(id: string): Promise<Category> {
    return this.categoryRepository.findOne(id, {
      relations: [
        'products',
        'products.productVariants',
        'products.productVariants.sellerInventories',
      ],
    });
  }

  async updateCategory(
    id: string,
    updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> {
    const Category: Category =
      this.categoryRepository.create(updateCategoryInput);
    Category.id = id;
    return this.categoryRepository.save(Category);
  }

  async removeCategory(id: string) {
    return this.categoryRepository.findOne(id, {
      relations: [
        'products',
        'products.productVariants',
        'products.productVariants.sellerInventories',
      ],
    });
    const prod = this.findOne(id);
    if (prod) {
      const ret = await this.categoryRepository.delete(id);
      if (ret.affected === 1) {
        return prod;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`);
  }

  async getCategoriesByIds(ids: string[]) {
    return this.categoryRepository.find({
      where: { id: In(ids) },
    });
  }
}
