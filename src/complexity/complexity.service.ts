import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateComplexityDto } from './dto/create-complexity .dto';
import { Complexity } from './complexity.model';

@Injectable()
export class ComplexityService {
  constructor(
    @InjectModel(Complexity) private ComplexityRepository: typeof Complexity,
  ) {}

  async createUser(dto: CreateComplexityDto): Promise<Complexity> {
    return await this.ComplexityRepository.create(dto);
  }

  async getAllUsers() {
    return await this.ComplexityRepository.findAll();
  }
}
