import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ITask } from 'src/types/types';

@Table({ tableName: 'tasks' })
export class Task extends Model<Task, ITask> {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ApiProperty({
    example: 'Вычесть ве чётные числа из множества....',
    description: 'Условие задачи',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  condition: string;

  @ApiProperty({
    example: 'Выполняет:...',
    description: 'Описание роли',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  complexity: number;
}