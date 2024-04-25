import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Review } from './review.model';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  imports: [SequelizeModule.forFeature([Review])],
})
export class ReviewModule {}
