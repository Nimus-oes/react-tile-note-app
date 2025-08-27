import type { FILTERS, SORTING_ORDERS } from "./constants";

export interface Note {
  id: string;
  text: string;
  createdAt: number;
  isArchived: boolean;
  isFavorite: boolean;
}

export type Filter = (typeof FILTERS)[number];
export type Sorter = (typeof SORTING_ORDERS)[number];
