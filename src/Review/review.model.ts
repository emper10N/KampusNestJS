import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IReview } from 'src/types/types';

export interface IH {
  email: string;
  password: string;
}

@Table({ tableName: 'review' })
export class Review extends Model<Review, IH> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: false,
  })
  bannedL: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  banReason: string;
}
