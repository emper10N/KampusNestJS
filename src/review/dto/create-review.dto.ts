import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  readonly id: number;

  @ApiProperty({
    example: 'Ген. Директор',
    description: 'Должность пользователся на стажировке',
  })
  readonly currentPosition: string;

  @ApiProperty({
    example: 'Интересное предложение, но....',
    description: 'Текст отзыва',
  })
  readonly description: string;
}
