import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ICompany } from 'src/types/types';

@Table({ tableName: 'companies' })
export class Company extends Model<Company, ICompany> {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ApiProperty({
    example: 'Google',
    description: 'Название компании',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: 'https://about.google/',
    description: 'Сайт компании',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  companyHref: string | URL;
}
