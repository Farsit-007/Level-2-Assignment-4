export type TOrder = {
  email: string;
  name: string;
  product: string;
  productImage: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  status: "Pending" | "Paid" | "Failed" | "Cancelled";
  transaction: {
    id: string;
    transactionStatus: string;
    bank_status: string;
    sp_code: string;
    sp_message: string;
    method: string;
    date_time: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
};
