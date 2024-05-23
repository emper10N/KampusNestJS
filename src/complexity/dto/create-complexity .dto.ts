import { ApiProperty } from '@nestjs/swagger';

export class CreateComplexityDto {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  readonly id: number;

  @ApiProperty({
    example: 'Сложность заключается в....',
    description: 'Описание сложности',
  })
  readonly description: string;

  @ApiProperty({
    example: '5',
    description: 'Сложность задачи',
  })
  readonly complexity: number;
}
