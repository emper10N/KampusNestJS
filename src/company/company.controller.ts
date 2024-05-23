import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { Company } from './company.model';
import { CreateCompanyDto } from './dto/create-company.dto';

@ApiTags('Компании')
@Controller('company')
export class CompanyController {
  constructor(public companyService: CompanyService) {}

  @ApiOperation({ summary: 'Создание компании' })
  @ApiResponse({ status: 200, type: Company })
  @Post()
  create(@Body() companyDto: CreateCompanyDto) {
    return this.companyService.createUser(companyDto);
  }

  @ApiOperation({ summary: 'Получение всех компаний' })
  @ApiResponse({ status: 200, type: [Company] })
  @Get()
  getAll() {
    return this.companyService.getAllUsers();
  }
}
