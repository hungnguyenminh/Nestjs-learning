import { Injectable } from '@nestjs/common';
import { Product } from '../../models/product.model';
import { ProductDto } from '../../dto/product.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private usersRepository: Repository<ProductEntity>,
  ) {}

  private products: Product[] = [
    {
      id: 1,
      categoryId: 2,
      productName: 'abc',
      price: 80000
    }
  ]
  getProduct(): any {
    return this.usersRepository.find()
  }

  createProduct(productDto: ProductDto): Product {
    const product: Product = {
      id: Math.random(),
      ...productDto
    }

    this.products.push(product)
    return product
  }

  detailProduct(id: number): Product {
    return this.products.find((item) => item.id === Number(id))
  }

  updateProduct(productDto: ProductDto, id: number): Product {
    const findIndex = this.products.findIndex((item) => item.id === Number(id));

    this.products[findIndex].categoryId = productDto.categoryId
    this.products[findIndex].productName = productDto.productName
    this.products[findIndex].price = productDto.price
    return this.products[findIndex]
  }

  deleteProduct(id: number): boolean {
    return true
  }
}