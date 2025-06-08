export type Transaction = {
  id: string;
  title?: string;
  amount?: number | string;
  date?: Date;
  category?: string;
  currency?: string;
  note?: string;
  type?: string;
};
