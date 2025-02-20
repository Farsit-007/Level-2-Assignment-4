export type TProduct = {
  _id?: string;
  name?: string;
  brand?: string;
  image?: string | File;
  price: number;
  category?: string;
  description?: string;
  quantity: number;
  inStock?: boolean;
};
