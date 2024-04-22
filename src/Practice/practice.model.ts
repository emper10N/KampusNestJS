import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IPractice } from 'src/types/types';

@Table({ tableName: 'practice' })
export class Practice extends Model<Practice, IPractice> {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ApiProperty({
    example: 'ML',
    description: 'Направление стажировки/практики',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: string;

  @ApiProperty({
    example: 'Google',
    description: ' Компания, в которой будет проходить стажировка/практика',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  company: string;

  @ApiProperty({
    example: 'Juniour-разработчик',
    description: 'Именование должности стажировки/практики',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: '10.06.2022',
    description: 'дата начала стажировки (необязательно)',
  })
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  internshipBeginning?: Date | string | undefined;

  @ApiProperty({
    example: '10.08.2022',
    description: 'дата конца стажировки (необязательно)',
  })
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  internshipEnding?: Date | string | undefined;

  @ApiProperty({
    example: 'true',
    description:
      'Активен ли в данный момент набор на стажировку(необязательно, изначально true)',
  })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  isActive?: boolean;

  @ApiProperty({
    example: 'Стаж работы: ....',
    description: 'Описание, прилагаемое к вакансии или условиям отбора',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @ApiProperty({
    example: 'Написать свой пэт-проект на github',
    description:
      'тестовое задание (необязятельный параметр, по умолчанию undefined)',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  testTask?: string | URL | undefined;

  @ApiProperty({
    example: 'https://google.com',
    description: 'Ссылка на сайт работодателя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  employerHref: string;
}
