import { Module } from '@nestjs/common';
import { MongoDbService } from './mongo-db/mongo-db.service';
import { AppController } from './app-controller/app-controller.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MongoDbService],
})
export class AppModule { }
