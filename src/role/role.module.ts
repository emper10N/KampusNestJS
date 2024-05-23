import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from './role.model';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [SequelizeModule.forFeature([Role])],
})
export class RoleModule {}
