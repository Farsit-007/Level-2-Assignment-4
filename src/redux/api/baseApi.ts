/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../features/store";
import { logout, setUser } from "../features/auth/authSlice";
import toast from "react-hot-toast";
import { TError } from "../../types/global.type";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://assignment-2-gray-sigma.vercel.app/api/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    toast.error("Not Founded!");
  }
  if (result?.error?.status === 403) {
    const typedError = result?.error as TError;
    const errorMessage =
      typedError?.data?.errorSource?.[0]?.message || "Something went wrong";
    toast.error(errorMessage);
  }
  if (result?.error?.status === 401) {
    const res = await fetch(
      "https://assignment-2-gray-sigma.vercel.app/api/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );
    const data = await res.json();
    if (data?.data?.token) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(
        setUser({
          user,
          token: data?.data?.token,
        })
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["product", "user", "order"],
  endpoints: () => ({}),
});
