import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IUser } from 'src/types/types';

@Table({ tableName: 'users' })
export class User extends Model<User, IUser> {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ApiProperty({
    example: 'Олег',
    description: 'Имя пользователя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @ApiProperty({
    example: 'Олегов',
    description: 'Фамилия пользователя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @ApiProperty({
    example: '20',
    description: 'Возраст пользователя',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @ApiProperty({
    example: '/assets/img/photo.jpg',
    description: 'Фотография пользователя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  profilePhoto: string | URL;

  @ApiProperty({
    example: '01.10.2024',
    description: 'Дата регистрации',
  })
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  registerDate: Date;

  @ApiProperty({
    example: '+71234567',
    description: 'Номер телефона пльзователя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phoneNumber: string;

  @ApiProperty({
    example: 'mail@example.com',
    description: 'E-mail пользователя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;
}
