import { Injectable } from '@nestjs/common';
import { Item } from '../interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class ItemsService {
  // private readonly items: Item[] = [
  //   {
  //     id: '1234443',
  //     name: 'Item 1',
  //     description: 'This is Item 1',
  //     qty: 10,
  //   },
  //   {
  //     id: '1236790',
  //     name: 'Item 2',
  //     description: 'This is Item 2',
  //     qty: 20,
  //   },
  //   {
  //     id: '1233748',
  //     name: 'Item 3',
  //     description: 'This is Item 3',
  //     qty: 30,
  //   },
  //   {
  //     id: '1234455',
  //     name: 'Item 4',
  //     description: 'This is Item 4',
  //     qty: 40,
  //   },
  // ];

  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item | null> {
    const item = await this.itemModel.findById(id);
    if (item) {
      return item;
    }
    return null;
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item | null> {
    return await this.itemModel.findByIdAndDelete(id);
  }

  async update(id: string, item: Item): Promise<Item | null> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
