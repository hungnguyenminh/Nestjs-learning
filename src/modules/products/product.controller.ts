import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from '../../global/globalClass';
import { HttpMessage, HttpStatus } from '../../global/globalEnum';
import { Product } from '../../models/product.model';
import { ProductDto } from '../../dto/product.dto';

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
  createProduct(@Body(new ValidationPipe()) productDto: ProductDto): ResponseData<ProductDto> {
    try {
      return new ResponseData<ProductDto>(this.productService.createProduct(productDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
    }
    catch (e) {
      return new ResponseData<ProductDto>(null, HttpStatus.ERROR, HttpMessage.ERROR)
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

  @Put('/:id')
  updateProduct(@Body() productDto: ProductDto, @Param('id') id: number): ResponseData<Product> {
    try {
      return new ResponseData<Product>(this.productService.updateProduct(productDto, id), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
    }
    catch (e) {
      return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR)
    }
  }

  @Delete(':/id')
  deleteProduct(@Param('id') id: number): ResponseData<boolean> {
    try {
      return new ResponseData<boolean>(this.productService.deleteProduct(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
    }
    catch (e) {
      return new ResponseData<boolean>(null, HttpStatus.ERROR, HttpMessage.ERROR)
    }
  }
}