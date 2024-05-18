import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('categories')
export  class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name_categories: string
}