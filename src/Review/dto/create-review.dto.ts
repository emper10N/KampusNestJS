import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  readonly id: number;

  @ApiProperty({ example: 'Олег', description: 'Имя автора' })
  readonly name: string;

  @ApiProperty({ example: '20', description: 'Возраст' })
  readonly age: number;

  @ApiProperty({
    example: 'Ген. Директор',
    description: 'Должность пользователся',
  })
  readonly currentPosition: string;

  @ApiProperty({
    example: '/assets/img/photo.jpg',
    description: 'Фотография пользователя',
  })
  readonly profilePhoto: string | URL;

  @ApiProperty({
    example: 'Интересное предложение',
    description: 'Текст отзыва',
  })
  readonly description: string;
}
