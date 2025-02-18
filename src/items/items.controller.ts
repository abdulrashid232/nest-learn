import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from 'src/DTO/create-item-dto';
import { Item } from 'src/interfaces/item.interface';
import { ItemsService } from 'src/services/items.services';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    console.log(this.itemsService.findAll());
    return this.itemsService.findAll();
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): Item {
    return this.itemsService.create(createItemDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Item | undefined {
    return this.itemsService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }
}
