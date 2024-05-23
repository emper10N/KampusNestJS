import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ComplexityService } from './complexity.service';
import { ComplexityController } from './complexity.controller';
import { Complexity } from './complexity.model';

@Module({
  controllers: [ComplexityController],
  providers: [ComplexityService],
  imports: [SequelizeModule.forFeature([Complexity])],
})
export class ComplexityModule {}
