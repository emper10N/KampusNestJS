import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from './role.model';
import { Review } from 'src/review/review.model';
import { User } from 'src/uers/users.model';
import { Practice } from 'src/practice/practice.model';
import { Task } from 'src/task/task.model';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [SequelizeModule.forFeature([Role, Review, User, Practice, Task])],
})
export class RoleModule {}
