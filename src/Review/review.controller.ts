import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Review } from './review.model';

@ApiTags('Отзывы')
@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @ApiOperation({ summary: 'Создание отзыва' })
  @ApiResponse({ status: 200, type: Review })
  @Post()
  create(@Body() reviewDto: CreateReviewDto) {
    return this.reviewService.createReview(reviewDto);
  }

  @ApiOperation({ summary: 'Получение всех отзывов' })
  @ApiResponse({ status: 200, type: [Review] })
  @Get()
  getAll() {
    return this.reviewService.getAllReview();
  }
}
