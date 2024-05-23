import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoleService } from './role.service';
import { Role } from './role.model';
import { CreateRoleDto } from './dto/create-role.dto';

@ApiTags('Роли')
@Controller('roles')
export class RoleController {
  constructor(public roleService: RoleService) {}

  @ApiOperation({ summary: 'Создание роли' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() roleDto: CreateRoleDto) {
    return this.roleService.createUser(roleDto);
  }

  @ApiOperation({ summary: 'Получение всех ролей' })
  @ApiResponse({ status: 200, type: [Role] })
  @Get()
  getAll() {
    return this.roleService.getAllUsers();
  }
}
