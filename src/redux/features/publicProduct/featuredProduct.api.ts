import { TResponseRedux } from "../../../types/global.type";
import { TProduct } from "../../../types/product.type";
import { baseApi } from "../../api/baseApi";

const featuredProductApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getFeaturedProduct : builder.query({
            query : ()=>({
                url : '/products',
                method : "GET"
            }),
            transformResponse : (response : TResponseRedux<TProduct[]>) =>{
                return response.data
            }
        }),
        getSIngleProduct : builder.query({
            query : (productId)=>({
                url : `/products/${productId}`,
                method : "GET"
            }),
            transformResponse : (response: TResponseRedux<TProduct>) =>{
                return response.data
            }
        })
    })
}) 

export const {useGetFeaturedProductQuery,useGetSIngleProductQuery} = featuredProductApi