import { TResponseRedux } from "../../../../types/global.type";
import { TProduct } from "../../../../types/product.type";
import { baseApi } from "../../../api/baseApi";

const adminProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminProduct: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["product"],
      transformResponse: (response: TResponseRedux<TProduct[]>) => {
        return response.data;
      },
    }),
    createProduct: builder.mutation({
      query: (productData) => ({
        url: `/products`,
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["product"],
    }),
    getProduct: builder.query({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TProduct>) => {
        return response.data;
      },
    }),
    updateProduct: builder.mutation({
      query: (args) => ({
        url: `/products/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetAdminProductQuery,
  useCreateProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = adminProductApi;
