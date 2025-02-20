import { TResponseRedux } from "../../../../types/global.type";
import { TOrder } from "../../../../types/order.type";
import { baseApi } from "../../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => ({
        url: `/orders`,
        method: "GET",
      }),
      providesTags: ["order"],
      transformResponse: (response: TResponseRedux<TOrder[]>) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetAllOrdersQuery } = orderApi;
