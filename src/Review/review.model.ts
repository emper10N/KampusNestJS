import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IReview } from 'src/types/types';

@Table({ tableName: 'review' })
export class Review extends Model<Review, IReview> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  practice_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  currentPosition: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  profilePhoto: string | URL;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;
}
