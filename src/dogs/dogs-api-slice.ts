import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DOGS_API_KEY ='live_S4Yj45qR2s4ih6IjDXJLh31jWygfEC6MxWwTv3zGN2ASWOpYTaiFHDqMfw2ukYPP'

interface Breed {
    id: string; 
    name: string;
    image: {
        url: string
    } 
}

export const apiSlice = createApi({
    reducerPath: 'api', 
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key', DOGS_API_KEY); 
            return headers; 
        } 
    }), 
    endpoints(builder) {
        return {
            fetchBreeds: builder.query<Breed[], number|void>({
                query(limit=10, page=0) {
                    return `/breeds?limit=${limit}&page=${page}`;
                }, 
            })
        }
    }
});


export const { useFetchBreedsQuery } = apiSlice; 