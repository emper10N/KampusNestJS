import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Company } from 'src/company/company.model';
import { Role } from 'src/role/role.model';
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
    example: '534754',
    description: 'Уникальный идентификатор компании',
  })
  @ForeignKey(() => Company)
  companyId: number;

  @ApiProperty({
    example: '85785',
    description: 'Уникальный идентификатор роли для стажировки/практики',
  })
  @ForeignKey(() => Role)
  roleId: number;

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
}
