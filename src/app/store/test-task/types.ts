export interface Item {
  id: string;
  text: string;
  value: number;
}

export interface Section {
  id: string;
  name: string;
  items: Item[];
}
