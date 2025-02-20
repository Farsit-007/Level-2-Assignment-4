import { TResponseRedux } from "../../../types/global.type";
import { TOrder } from "../../../types/order.type";
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: (email) => ({
        url: `/orders/${email}`,
        method: "GET",
      }),
      providesTags: ["order"],
      transformResponse: (response: TResponseRedux<TOrder[]>) => {
        return response.data;
      },
    }),
    createOrders: builder.mutation({
      query: (orderData) => ({
        url: `/orders`,
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["order"],
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: `/orders/verify`,
        params: { order_id },
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateOrdersMutation,
  useVerifyOrderQuery,
  useGetOrdersQuery,
} = orderApi;
