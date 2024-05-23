import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  readonly id: number;

  @ApiProperty({
    example: 'Juniour-разрабботчик',
    description: 'Название роли',
  })
  readonly title: string;

  @ApiProperty({
    example: 'Выполняет:...',
    description: 'Описание роли',
  })
  readonly description: string;
}
