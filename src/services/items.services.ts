import { Injectable } from '@nestjs/common';
import { Item } from '../interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1234443',
      name: 'Item 1',
      description: 'This is Item 1',
      qty: 10,
    },
    {
      id: '1236790',
      name: 'Item 2',
      description: 'This is Item 2',
      qty: 20,
    },
    {
      id: '1233748',
      name: 'Item 3',
      description: 'This is Item 3',
      qty: 30,
    },
    {
      id: '1234455',
      name: 'Item 4',
      description: 'This is Item 4',
      qty: 40,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item | undefined {
    const item = this.items.find((item) => item.id === id);
    if (item) {
      return item;
    }
    return undefined;
  }

  create(item: Item): Item {
    this.items.push(item);
    return item;
  }
}
