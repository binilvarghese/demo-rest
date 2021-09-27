import { Product } from 'src/product/entities/product.entity';
import { SellerInventory } from 'src/seller-inventory/entities/seller-inventory.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ProductVariant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product, (product) => product.productVariants)
  product: Product;

  @Column({ type: 'uuid' })
  productId: string;

  @Column()
  currencyCode: string;

  @Column()
  weight: number;

  @Column()
  name: string;

  @Column()
  msrp: number;

  @Column()
  uom: string;

  @Column({ length: 200, nullable: true })
  imageKey: string;

  @OneToMany(
    () => SellerInventory,
    (sellerInventory) => sellerInventory.product_variant,
  )
  sellerInventories: SellerInventory[];
}
