import { ApiProperty } from '@nestjs/swagger';

export class CreateSalaryDto {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  readonly id: number;

  @ApiProperty({
    example: '60000',
    description: 'Количество',
  })
  readonly count: number;

  @ApiProperty({
    example: '$',
    description: 'Валюта',
  })
  readonly currency: string;
}
