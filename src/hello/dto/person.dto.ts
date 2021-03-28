import { ApiProduces, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, Min, IsNumber, Length } from 'class-validator';

export class PersonDTO {
  @Length(3, 10)
  @ApiProperty({
    description: 'Enter your name > ',
    minLength: 3,
    default: 'Ali',
    maxLength: 10,
  })
  name: string;

  @IsNumber()
  @IsOptional()
  @Min(1960)
  @ApiPropertyOptional({
    description: 'Optional',
    default: 1998,
    minimum: 1960,
  })
  year: number;
}
