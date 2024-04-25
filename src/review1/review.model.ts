import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IReview } from 'src/types/types';

@Table({ tableName: 'review' })
export class Review extends Model<Review, IReview> {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ApiProperty({ example: 'Олег', description: 'Имя автора' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: '20', description: 'Возраст' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @ApiProperty({
    example: 'Ген. Директор',
    description: 'Должность пользователся',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  currentPosition: string;

  @ApiProperty({
    example: '/assets/img/photo.jpg',
    description: 'Фотография пользователя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  profilePhoto: string | URL;

  @ApiProperty({
    example: 'Интересное предложение',
    description: 'Текст отзыва',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;
}
