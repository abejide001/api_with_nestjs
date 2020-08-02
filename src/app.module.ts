import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm"
import { join } from "path"
import { ProductModule } from './product/product.module';
import * as dotenv from "dotenv"

dotenv.config()

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env

@Module({
  imports: [
     TypeOrmModule.forRoot({
       type: "mysql",
       host: "localhost",
       port: 3306,
       username: DB_USER,
       password: DB_PASSWORD,
       database: DB_NAME,
       entities: [join(__dirname, '**', '*.entity.{ts,js}')],
       synchronize: true,
     }),
     ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
