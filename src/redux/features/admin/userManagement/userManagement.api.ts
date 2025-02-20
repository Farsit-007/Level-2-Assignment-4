import { TResponseRedux } from "../../../../types/global.type";
import { TUser } from "../../../../types/user.type";
import { baseApi } from "../../../api/baseApi";

const adminProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["user"],
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return response.data;
      },
    }),

    updateUsers: builder.mutation({
      query: (args) => ({
        url: `/users/${args.id}`,
        method: "PATCH",
        body: { isBlock: args.data },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUsersMutation } = adminProductApi;
