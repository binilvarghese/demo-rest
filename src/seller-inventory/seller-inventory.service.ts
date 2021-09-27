import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CreateSellerInventoryInput } from './dto/create-seller-inventory.input';
import { UpdateSellerInventoryInput } from './dto/update-seller-inventory.input';
import { SellerInventory } from './entities/seller-inventory.entity';

@Injectable()
export class SellerInventoryService {
  constructor(
    @InjectRepository(SellerInventory)
    private sellerInventoryRepository: Repository<SellerInventory>,
  ) {}

  async createSellerInventory(
    createSellerInventoryInput: CreateSellerInventoryInput,
  ): Promise<SellerInventory> {
    const prod = this.sellerInventoryRepository.create(
      createSellerInventoryInput,
    );
    return this.sellerInventoryRepository.save(prod);
  }
  async findAllSellerInventories(): Promise<SellerInventory[]> {
    return this.sellerInventoryRepository.find({
      relations: ['product_variant'],
    });
  }

  async findOne(id: string): Promise<SellerInventory> {
    return this.sellerInventoryRepository.findOne(id, {
      relations: ['product_variant'],
    });
  }

  async updateSellerInventory(
    id: string,
    updateProductInput: UpdateSellerInventoryInput,
  ): Promise<SellerInventory> {
    const product: SellerInventory =
      this.sellerInventoryRepository.create(updateProductInput);
    product.id = id;
    return this.sellerInventoryRepository.save(product);
  }

  async removeSellerInventory(id: string) {
    return this.sellerInventoryRepository.findOne(id, {
      relations: ['product_variant'],
    });
    const prod = this.findOne(id);
    if (prod) {
      const ret = await this.sellerInventoryRepository.delete(id);
      if (ret.affected === 1) {
        return prod;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`);
  }

  async getSellerInventoryByIds(ids: string[]) {
    return this.sellerInventoryRepository.find({
      where: { id: In(ids) },
    });
  }
}
