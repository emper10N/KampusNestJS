import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Review } from './review.model';
import { User } from 'src/uers/users.model';
import { Role } from 'src/role/role.model';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  imports: [SequelizeModule.forFeature([Review, User, Role])],
})
export class ReviewModule {}
