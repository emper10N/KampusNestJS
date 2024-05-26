import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  readonly id: number;

  @ApiProperty({
    example: '3232432',
    description: 'Идентификатор пользователя, оставившего отзыв',
  })
  readonly userId: number;

  @ApiProperty({ example: '202432', description: 'Идентификатор роли' })
  readonly roleId: number;

  @ApiProperty({
    example: 'Интересное предложение, но....',
    description: 'Текст отзыва',
  })
  readonly description: string;
}
