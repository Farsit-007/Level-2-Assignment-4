import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TErrorSource = {
  path: string;
  message: string;
};

export type TError = {
  data: {
    success: boolean;
    message: string;
    errorSource: TErrorSource[];
    stack?: string;
  };
  status: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};

export type TFilters = {
  minPrice: string;
  maxPrice: string;
  category: string;
  inStock: string;
};
