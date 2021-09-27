import { Module } from '@nestjs/common';
import { SellerInventoryService } from './seller-inventory.service';
import { SellerInventoryController } from './seller-inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerInventory } from './entities/seller-inventory.entity';
import { ProductVariantModule } from 'src/product-variant/product-variant.module';

@Module({
  imports: [TypeOrmModule.forFeature([SellerInventory]), ProductVariantModule],
  controllers: [SellerInventoryController],
  providers: [SellerInventoryService],
  exports: [SellerInventoryService],
})
export class SellerInventoryModule { }
