import { Injectable } from '@nestjs/common';
import { Review } from './review.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(@InjectModel(Review) private reviewRepository: typeof Review) {}

  async createReview(dto: CreateReviewDto): Promise<Review> {
    return await this.reviewRepository.create(dto);
  }

  async getAllReview() {
    return await this.reviewRepository.findAll();
  }
}
