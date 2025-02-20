import { TResponseRedux } from "../../../types/global.type";
import { TProduct } from "../../../types/product.type";
import { baseApi } from "../../api/baseApi";

const featuredProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFeaturedProduct: builder.query({
      query: () => ({
        url: "/products/featured",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TProduct[]>) => {
        return response.data;
      },
    }),
    getAllProduct: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          Object.keys(args).forEach((key) => {
            const value = args[key];
            if (value) {
              params.append(key, value);
            }
          });
        }
        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TProduct[]>) => {
        return response.data;
      },
    }),
    getSIngleProduct: builder.query({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TProduct>) => {
        return response.data;
      },
    }),
  }),
});

export const {
  useGetFeaturedProductQuery,
  useGetSIngleProductQuery,
  useGetAllProductQuery,
} = featuredProductApi;
