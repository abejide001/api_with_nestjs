import { Module, MiddlewareConsumer, RequestMethod, Type } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { ValidationMiddleware } from "./middlewares/productMiddleware"

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository])], // add this
  controllers: [ProductController],
  providers: [ProductService],
})

export class ProductModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidationMiddleware).forRoutes({
      path: "/api/v1/products",
      method: RequestMethod.POST
    })
  }
}