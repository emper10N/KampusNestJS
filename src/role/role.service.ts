import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.model';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private RoleRepository: typeof Role) {}

  async createRole(dto: CreateRoleDto): Promise<Role> {
    return await this.RoleRepository.create(dto);
  }

  async getAllRoles() {
    return await this.RoleRepository.findAll();
  }
}
