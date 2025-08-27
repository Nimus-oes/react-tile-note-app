import type { FILTERS, SORTING_ORDERS } from "./constants";

export interface Note {
  id: string;
  text: string;
  createdAt: number;
  isFavorite: boolean;
  color: string;
}

export type Filter = (typeof FILTERS)[number];
export type Sorter = (typeof SORTING_ORDERS)[number];
