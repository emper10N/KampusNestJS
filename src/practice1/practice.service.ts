import { Injectable } from '@nestjs/common';
import { Practice } from './practice.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePracticeDto } from './dto/create-practice.dto';

@Injectable()
export class PracticeService {
  constructor(
    @InjectModel(Practice) private practiceRepository: typeof Practice,
  ) {}

  async createPractice(dto: CreatePracticeDto): Promise<Practice> {
    return await this.practiceRepository.create(dto);
  }

  async getAllPractice() {
    return await this.practiceRepository.findAll();
  }
}
