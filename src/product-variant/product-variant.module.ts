import { Module } from '@nestjs/common';
import { ProductVariantService } from './product-variant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductVariant } from './entities/product-variant.entity';
import { ProductModule } from 'src/product/product.module';
import { ProductVariantController } from './product-variant.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductVariant]), ProductModule],
  controllers: [ProductVariantController],
  providers: [ProductVariantService],
  exports: [ProductVariantService],
})
export class ProductVariantModule { }
