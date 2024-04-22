import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePracticeDto } from './dto/create-practice.dto';
import { PracticeService } from './practice.service';
import { Practice } from './practice.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Практики')
@Controller('practice')
export class PracticeController {
  constructor(private practiceService: PracticeService) {}

  @ApiOperation({ summary: 'Создание практики' })
  @ApiResponse({ status: 200, type: Practice })
  @Post()
  create(@Body() practiceDto: CreatePracticeDto) {
    return this.practiceService.createPractice(practiceDto);
  }

  @ApiOperation({ summary: 'Получение всех практик' })
  @ApiResponse({ status: 200, type: [Practice] })
  @Get()
  getAll() {
    return this.practiceService.getAllPractice();
  }
}
