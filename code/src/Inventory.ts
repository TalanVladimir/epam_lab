import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class Inventory implements ItemComparator {
  items: Item[] = [];

  inventory() {}

  addItem(item: Item): void {
    this.items.push(item);
  }

  sort(comparator: ItemComparator = new ItemComparator()): void {}

  toString(): string {
    return '';
  }

  compare(first: Item, second: Item): number {
    throw new Error('Method not implemented.');
  }
}
