import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Review } from 'src/review/review.model';
import { IRole } from 'src/types/types';

@Table({ tableName: 'roles' })
export class Role extends Model<Role, IRole> {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ApiProperty({
    example: 'Juniour-разрабботчик',
    description: 'Название роли',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: 'Выполняет:...',
    description: 'Описание роли',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @HasMany(() => Review)
  reviews: Review[];
}
