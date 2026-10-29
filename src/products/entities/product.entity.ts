import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('products')
export class Product {
  @ApiProperty({ example: 1, description: 'Identificador único del producto' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Monitor Gamer 24 pulgadas', description: 'Nombre comercial del producto' })
  @Column({ type: 'varchar', length: 150 })
  name: string;

  @ApiProperty({
    example: 'Pantalla IPS Full HD 144Hz con panel antirreflejo',
    description: 'Detalle o características del producto',
    required: false,
  })
  @Column({ type: 'text', nullable: true })
  description?: string;

  @ApiProperty({ example: 199.99, description: 'Precio de venta' })
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  price: number;

  @ApiProperty({ example: 30, description: 'Unidades disponibles en stock' })
  @Column({ type: 'int', default: 0 })
  stock: number;

  @ApiProperty({ example: true, description: 'Estado activo o descontinuado' })
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @ApiProperty({ description: 'Fecha de creación en el sistema' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de última modificación' })
  @UpdateDateColumn()
  updatedAt: Date;
}
