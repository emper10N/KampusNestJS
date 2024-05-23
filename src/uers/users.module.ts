import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { User } from './users.model';
import { Review } from 'src/review/review.model';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User, Review])],
})
export class UserModule {}
