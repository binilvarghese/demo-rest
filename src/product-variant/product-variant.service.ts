import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CreateProductVariantInput } from './dto/create-product-variant.input';
import { UpdateProductVariantInput } from './dto/update-product-variant.input';
import { ProductVariant } from './entities/product-variant.entity';

@Injectable()
export class ProductVariantService {
  constructor(
    @InjectRepository(ProductVariant)
    private productVariantRepository: Repository<ProductVariant>,
  ) {}

  async createProductVariant(
    createProductVariantInput: CreateProductVariantInput,
  ): Promise<ProductVariant> {
    const prod = this.productVariantRepository.create(
      createProductVariantInput,
    );
    return this.productVariantRepository.save(prod);
  }
  async findAllProductVariants(): Promise<ProductVariant[]> {
    return this.productVariantRepository.find({
      relations: ['product'],
    });
  }

  async findOne(id: string): Promise<ProductVariant> {
    return this.productVariantRepository.findOne(id, {
      relations: ['product'],
    });
  }

  async updateProductVariant(
    id: string,
    updateProductInput: UpdateProductVariantInput,
  ): Promise<ProductVariant> {
    const product: ProductVariant =
      this.productVariantRepository.create(updateProductInput);
    product.id = id;
    return this.productVariantRepository.save(product);
  }

  async removeProductVariant(id: string) {
    return this.productVariantRepository.findOne(id, {
      relations: ['product'],
    });
    const prod = this.findOne(id);
    if (prod) {
      const ret = await this.productVariantRepository.delete(id);
      if (ret.affected === 1) {
        return prod;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`);
  }

  async getProductVariantByIds(ids: string[]) {
    return this.productVariantRepository.find({
      where: { id: In(ids) },
    });
  }
}
