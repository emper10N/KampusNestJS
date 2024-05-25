import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from 'src/role/role.model';
import { IReview } from 'src/types/types';
import { User } from 'src/uers/users.model';

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

  @ForeignKey(() => User)
  userId: number;

  @ForeignKey(() => Role)
  roleId: number;

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
