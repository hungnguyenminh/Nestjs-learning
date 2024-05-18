import { Injectable } from '@nestjs/common';
import { Product } from '../../models/product.model';

@Injectable()
export class ProductService {
  private product: Product[] = [
    {
      id: 1,
      categoryId: 2,
      productName: 'abc',
      price: 80000
    }
  ]
  getProduct(): Product[] {
    return this.product
  }

  createProduct(): string {
    return 'create product'
  }

  detailProduct(id: number): Product {
    return this.product.find((item) => item.id === Number(id))
  }

  updateProduct(): string {
    return 'update product'
  }

  deleteProduct(): string {
    return 'delete product'
  }
}