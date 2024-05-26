import { ApiProperty } from '@nestjs/swagger';

export class CreatePracticeDto {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  readonly id: number;

  @ApiProperty({
    example: 'ML',
    description: 'Направление стажировки/практики',
  })
  readonly role: string;

  @ApiProperty({
    example: '380876',
    description: 'Id компании, в которой будет проходить стажировка/практика',
  })
  readonly companyId: string;

  @ApiProperty({
    example: '123213',
    description: 'Id должности стажировки/практики',
  })
  readonly roleId: string;

  @ApiProperty({
    example: 'Стаж работы: ....',
    description: 'Описание, прилагаемое к вакансии или условиям отбора',
  })
  readonly description: string;
}
