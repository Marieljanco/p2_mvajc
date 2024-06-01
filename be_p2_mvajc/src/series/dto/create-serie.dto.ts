import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsInt, IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateSeriesDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo titulo no debe ser vacío' })
  @IsString({ message: 'El campo titulo debe ser de tipo cadena' })
  @MaxLength(250, { message: 'El campo titulo no debe ser mayor a 250 caracteres' })
  @MinLength(2, { message: 'El campo titulo no debe ser menor a 2 caracteres' })
  readonly titulo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo sinopsis no debe ser vacío' })
  @IsString({ message: 'El campo sinopsis debe ser de tipo cadena' })
  @MaxLength(5000, { message: 'El campo sinopsis no debe ser mayor a 5000 caracteres' })
  @MinLength(20, { message: 'El campo sinopsis no debe ser menor a 20 caracteres' })
  readonly sinopsis: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo director no debe ser vacío' })
  @IsString({ message: 'El campo director debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo director no debe ser mayor a 100 caracteres' })
  @MinLength(2, { message: 'El campo director no debe ser menor a 2 caracteres' })
  readonly director: string;
  
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo temporadas no debe ser vacío' })
  @IsNumber({}, { message: 'El campo temporadas debe ser de tipo numérico' })
  readonly temporadas: number;

  @ApiProperty({ example: '2024-04-13' })
  @IsNotEmpty({ message: 'El campo fechaEstreno no debe ser vacío' })
  @IsDateString({}, { message: 'El campo fecha de estreno debe ser de tipo fecha' })
  readonly fecha_estreno: Date;

}
