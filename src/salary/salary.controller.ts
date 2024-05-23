import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Salary } from './salary.model';
import { SalaryService } from './salary.service';
import { CreateSalaryDto } from './dto/create-salary.dto';

@ApiTags('Зарплата')
@Controller('Salaries')
export class SalaryController {
  constructor(public salaryService: SalaryService) {}

  @ApiOperation({ summary: 'Создание зарплаты' })
  @ApiResponse({ status: 200, type: Salary })
  @Post()
  create(@Body() salaryDto: CreateSalaryDto) {
    return this.salaryService.createUser(salaryDto);
  }

  @ApiOperation({ summary: 'Получение всех зарплат' })
  @ApiResponse({ status: 200, type: [Salary] })
  @Get()
  getAll() {
    return this.salaryService.getAllUsers();
  }
}
