//using redux toolkit query
// it shortens the amount of boilerplate code u need to write
// simple api requests and save their value

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: [],
    endpoints: (build) => ({
        postAiText: build.mutation({
            query: (payload) => ({
                url: "openai/text",
                method: "POST",
                body: payload,
            }),
        }),
    }),

});

export const {
    usePostAiTextMutation
} = api;