import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IComplexity } from 'src/types/types';

@Table({ tableName: 'complexities' })
export class Complexity extends Model<Complexity, IComplexity> {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ApiProperty({
    example: 'Сложность заключается в....',
    description: 'Описание сложности',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

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
