import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  readonly id: number;

  @ApiProperty({
    example: 'Google',
    description: 'Название компании',
  })
  readonly title: string;

  @ApiProperty({
    example: 'https://about.google/',
    description: 'Сайт компании',
  })
  readonly companyHref: string | URL;
}
