import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from 'src/services/items.services';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemModule {}
