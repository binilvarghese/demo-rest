import { Category } from 'src/category/entities/category.entity';
import { ProductVariant } from 'src/product-variant/entities/product-variant.entity';
import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @Column({ type: 'uuid' })
  categoryId: string;

  @Column({ length: 50 })
  title: string;

  @Column({ length: 2000 })
  description: string;

  @Column({ length: 200, nullable: true })
  imageKey: string;

  @Column()
  isTaxApplicable: boolean;

  @Column({ length: 20, nullable: true })
  status: string;

  @Column()
  isSellerProduct: boolean;

  @OneToMany(() => ProductVariant, (productVariant) => productVariant.product)
  productVariants: ProductVariant[];
}
