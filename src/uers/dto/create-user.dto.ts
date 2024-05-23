import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: '102432', description: 'Уникальный идентификатор' })
  readonly id: number;

  @ApiProperty({ example: 'Олег', description: 'Имя пользователя' })
  readonly name: string;

  @ApiProperty({ example: 'qwerty123', description: 'Пароль' })
  readonly password: string;

  @ApiProperty({ example: '20', description: 'Возраст' })
  readonly age: number;

  @ApiProperty({
    example: 'Ген. Директор',
    description: 'Должность пользователся',
  })
  readonly currentPosition: string;

  @ApiProperty({
    example: '/assets/img/photo.jpg',
    description: 'Фотография пользователя',
  })
  readonly profilePhoto: string | URL;

  @ApiProperty({
    example: '01.10.2024',
    description: 'Дата регистрации',
  })
  readonly registerDate: Date;

  @ApiProperty({
    example: '+71234567',
    description: 'Номер телефона пльзователя',
  })
  readonly phoneNumber: string;

  @ApiProperty({
    example: 'mail@example.com',
    description: 'E-mail пользователя',
  })
  readonly email: string;
}
