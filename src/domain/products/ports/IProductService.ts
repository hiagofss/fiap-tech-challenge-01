import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../adapters/inbound/dtos/create-product.dto';
import { UpdateProductDto } from 'src/domain/products/adapters/inbound/dtos/update-product.dto';

export interface IProductService {
  create: (createProductDto: CreateProductDto) => Promise<Product>;
  findAll: () => Promise<Product[]>;
  update: (id: string, updateProductDto: UpdateProductDto) => Promise<Product>;
  remove: (id: string) => Promise<void>;
}

export const IProductService = Symbol('IProductService');
