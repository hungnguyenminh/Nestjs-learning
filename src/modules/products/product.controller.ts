import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from '../../global/globalClass';
import { HttpMessage, HttpStatus } from '../../global/globalEnum';
import { Product } from '../../models/product.model';

@Controller('products')

export class ProductController {
  constructor(private readonly productService: ProductService) {
  }
  @Get()
  getProduct(): ResponseData<Product[]> {
    try {
      return new ResponseData<Product[]>(this.productService.getProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
    }
    catch (e) {
      return new ResponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR)
    }
  }

  @Post()
  createProduct(): ResponseData<string> {
    try {
      return new ResponseData<string>(this.productService.createProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
    }
    catch (e) {
      return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR)
    }
  }

  @Get('/:id')
  detailProduct(@Param('id') id: number): ResponseData<Product> {
    try {
      return new ResponseData<Product>(this.productService.detailProduct(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
    }
    catch (e) {
      return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR)
    }
  }

  @Put(':/id')
  updateProduct(): ResponseData<string> {
    try {
      return new ResponseData<string>(this.productService.updateProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
    }
    catch (e) {
      return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR)
    }
  }

  @Delete(':/id')
  deleteProduct(): ResponseData<string> {
    try {
      return new ResponseData<string>(this.productService.deleteProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
    }
    catch (e) {
      return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR)
    }
  }
}