import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ISalary, ITask } from 'src/types/types';

@Table({ tableName: 'salaries' })
export class Salary extends Model<Salary, ISalary> {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ApiProperty({
    example: '60000',
    description: 'Количество',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  count: number;

  @ApiProperty({
    example: '$',
    description: 'Валюта',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  currency: string;
}
