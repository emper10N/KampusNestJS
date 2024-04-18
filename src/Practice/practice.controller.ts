import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePracticeDto } from './dto/create-practice.dto';
import { PracticeService } from './practice.service';

@Controller('practice')
export class PracticeController {
  constructor(private practiceService: PracticeService) {}

  @Post()
  create(@Body() practiceDto: CreatePracticeDto) {
    return this.practiceService.createPractice(practiceDto);
  }

  @Get()
  getAll() {
    return this.practiceService.getAllPractice();
  }
}
