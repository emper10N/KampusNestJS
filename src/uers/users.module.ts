import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { User } from './users.model';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User])],
})
export class UserModule {}
