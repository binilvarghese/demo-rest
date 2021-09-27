import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: true })
  parentId: string;

  @OneToMany(() => Category, (category) => category.parent, { nullable: true })
  children: Category[];

  @ManyToOne(() => Category, (category) => category.children)
  @JoinColumn({ name: 'parentId' })
  parent: Category;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 20, nullable: true })
  status: string;

  @Column({ length: 200, nullable: true })
  imageKey: string;

  @Column()
  level: number;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
