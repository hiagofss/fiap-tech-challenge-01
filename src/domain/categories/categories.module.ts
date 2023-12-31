import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './adapters/inbound/controller/categories.controller';
import { ICategoryRepository } from './ports/ICategoryRepository';
import { CategoryModelRepository } from './adapters/outbound/repositories/category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModel } from './adapters/outbound/models/category.model';
import { ICategoriesService } from './ports/ICategoriesService';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryModel])],
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    {
      provide: ICategoryRepository,
      useClass: CategoryModelRepository,
    },
    {
      provide: ICategoriesService,
      useClass: CategoriesService,
    },
  ],
})
export class CategoriesModule {}
