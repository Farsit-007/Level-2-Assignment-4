import { TResponseRedux } from "../../../types/global.type";
import { TUser } from "../../../types/user.type";
import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleUser: builder.query({
      query: (email) => ({
        url: `/users/${email}`,
        method: "GET",
      }),
      providesTags: ["user"],
      transformResponse: (response: TResponseRedux<TUser>) => {
        return response.data;
      },
    }),
    updateProfileUser: builder.mutation({
      query: (args) => ({
        url: `/users/profile/${args.email}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetSingleUserQuery, useUpdateProfileUserMutation } = userApi;
