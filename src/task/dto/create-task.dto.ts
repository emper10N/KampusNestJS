import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  readonly id: number;

  @ApiProperty({
    example: '2432',
    description: 'Уникальный идентификатор роли, к которой относится задача',
  })
  readonly roleId: number;

  @ApiProperty({
    example: 'Вычесть ве чётные числа из множества....',
    description: 'Условие задачи',
  })
  readonly condition: string;

  @ApiProperty({
    example: '5',
    description: 'Сложность задачи',
  })
  readonly complexity: number;
}
