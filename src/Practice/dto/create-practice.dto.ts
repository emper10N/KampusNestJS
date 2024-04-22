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
    example: 'Google',
    description: ' Компания, в которой будет проходить стажировка/практика',
  })
  readonly company: string;

  @ApiProperty({
    example: 'Juniour-разработчик',
    description: 'Именование должности стажировки/практики',
  })
  readonly title: string;

  @ApiProperty({
    example: 'Стаж работы: ....',
    description: 'Описание, прилагаемое к вакансии или условиям отбора',
  })
  readonly description: string;

  @ApiProperty({
    example: 'https://google.com',
    description: 'Ссылка на сайт работодателя',
  })
  readonly employerHref: string | URL;
}
