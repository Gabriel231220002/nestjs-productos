import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsNumber,
  IsPositive,
  IsInt,
  Min,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    example: 'Teclado Mecánico RGB',
    description: 'Nombre del producto (mínimo 3 caracteres)',
  })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  name: string;

  @ApiPropertyOptional({
    example: 'Teclado mecánico con switches rojos y retroiluminación',
    description: 'Descripción detallada del producto',
  })
  @IsString({ message: 'La descripción debe ser un texto' })
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: 59.99,
    description: 'Precio unitario del producto (debe ser mayor a 0)',
  })
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'El precio debe ser un número con hasta 2 decimales' },
  )
  @IsPositive({ message: 'El precio debe ser un número positivo' })
  price: number;

  @ApiProperty({
    example: 15,
    description: 'Cantidad de unidades en inventario',
  })
  @IsInt({ message: 'El stock debe ser un número entero' })
  @Min(0, { message: 'El stock no puede ser negativo' })
  stock: number;

  @ApiPropertyOptional({
    example: true,
    description: 'Indica si el producto está disponible para la venta',
    default: true,
  })
  @IsBoolean({ message: 'isActive debe ser verdadero o falso' })
  @IsOptional()
  isActive?: boolean;
}
