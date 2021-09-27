import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
// import { CategoryService } from 'src/category/category.service';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    // private categoryService: CategoryService,
  ) { }

  async createProduct(
    createProductInput: CreateProductInput,
  ): Promise<Product> {
    const prod = this.productRepository.create(createProductInput);
    return this.productRepository.save(prod);
  }
  async findAllProducts(): Promise<Product[]> {
    return this.productRepository.find({
      relations: [
        'category',
        'productVariants',
        'productVariants.sellerInventories',
      ],
    });
  }

  async findOne(id: string): Promise<Product> {
    return this.productRepository.findOne(id, {
      relations: [
        'category',
        'productVariants',
        'productVariants.sellerInventories',
      ],
    });
  }

  async updateProduct(
    id: string,
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    const product: Product = this.productRepository.create(updateProductInput);
    product.id = id;
    return this.productRepository.save(product);
  }

  async removeProduct(id: string) {
    return this.productRepository.findOne(id, {
      relations: [
        'category',
        'productVariants',
        'productVariants.sellerInventories',
      ],
    });
    const prod = this.findOne(id);
    if (prod) {
      const ret = await this.productRepository.delete(id);
      if (ret.affected === 1) {
        return prod;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`);
  }

  async getProductsByIds(ids: string[]) {
    return this.productRepository.find({
      where: { id: In(ids) },
    });
  }

  // async getCategory(id: string): Promise<Category> {
  //   return this.categoryService.findOne(id);
  // }
}
