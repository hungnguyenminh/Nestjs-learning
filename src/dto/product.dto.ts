import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  categoryId?: number;

  @MinLength(5, {message: 'Tên sản phẩm ít nhất 5 kí tự'})
  productName?: string;

  @IsNumber()
  price?: number
}