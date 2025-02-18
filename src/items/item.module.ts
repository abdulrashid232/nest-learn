import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from 'src/services/items.services';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './schema/items.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemModule {}
