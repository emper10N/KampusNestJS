import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { IPractice } from 'src/types/types';

@Table({ tableName: 'practice' })
export class Practice extends Model<Practice, IPractice> {
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
  role: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  company: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  internshipBeginning?: Date | string | undefined;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  internshipEnding?: Date | string | undefined;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  isActive?: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  testTask?: string | URL | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  employerHref: string;
}
