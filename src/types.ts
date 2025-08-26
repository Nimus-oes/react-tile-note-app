import type { filters, sortOrders } from "./constants";

export interface Note {
  id: string;
  text: string;
  createdAt: number;
  isArchived: boolean;
  isFavorite: boolean;
}

export type Filter = (typeof filters)[number];
export type Sorter = (typeof sortOrders)[number];
