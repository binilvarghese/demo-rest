import { ProductVariant } from 'src/product-variant/entities/product-variant.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SellerInventory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(
    () => ProductVariant,
    (product_variant) => product_variant.sellerInventories,
  )
  product_variant: ProductVariant;

  @Column({ type: 'uuid' })
  productVariantId: string;

  @Column({ nullable: true })
  status: string;

  @Column()
  quantity: number;

  @Column()
  msrp: number;

  @Column()
  name: string;
}
