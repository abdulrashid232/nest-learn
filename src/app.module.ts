import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './items/item.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [ItemModule, MongooseModule.forRoot(config.mongoUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
