import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Complexity } from './complexity.model';
import { ComplexityService } from './complexity.service';
import { CreateComplexityDto } from './dto/create-complexity .dto';

@ApiTags('сложность')
@Controller('сomplexities')
export class ComplexityController {
  constructor(public complexityService: ComplexityService) {}

  @ApiOperation({ summary: 'Создание задачи' })
  @ApiResponse({ status: 200, type: Complexity })
  @Post()
  create(@Body() complexityDto: CreateComplexityDto) {
    return this.complexityService.createUser(complexityDto);
  }

  @ApiOperation({ summary: 'Получение всех задач' })
  @ApiResponse({ status: 200, type: [Complexity] })
  @Get()
  getAll() {
    return this.complexityService.getAllUsers();
  }
}
