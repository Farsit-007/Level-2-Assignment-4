export type TUser = {
  _id: string;
  name: string;
  email: string;
  passwordChangedAt?: Date;
  password: string;
  image: string;
  city: string;
  phone: string;
  address: string;
  role: string;
  isBlock: boolean;
};
