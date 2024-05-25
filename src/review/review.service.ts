import { Injectable } from '@nestjs/common';
import { Review } from './review.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateReviewDto } from './dto/create-review.dto';
import { User } from 'src/uers/users.model';
import { Repository } from 'sequelize-typescript';
import { Role } from 'src/role/role.model';

export interface GetReviews {
  id: number;
  name: string;
  age: number;
  currentPosition: string;
  profilePhoto: string | URL;
  description: string;
}

@Injectable()
export class ReviewService {
  public result: Array<GetReviews> = new Array<GetReviews>();
  constructor(
    @InjectModel(Review) private reviewRepository: Repository<Review>,
    @InjectModel(User) private userRepository: Repository<User>,
    @InjectModel(Role) private roleRepository: Repository<Role>,
  ) {}

  async createReview(dto: CreateReviewDto): Promise<Review> {
    return await this.reviewRepository.create(dto);
  }

  async getAllReview(): Promise<GetReviews[]> {
    const reviews = await this.reviewRepository.findAll();

    const getReviewPromises = reviews.map(async (review) => {
      const user = await this.userRepository.findByPk(review.userId);
      const role = await this.roleRepository.findByPk(review.roleId);

      return {
        id: review.id,
        name: user.name,
        age: user.age,
        currentPosition: role.title,
        profilePhoto: user.profilePhoto,
        description: review.description,
      };
    });

    const result = await Promise.all(getReviewPromises);
    return result;
  }
}
