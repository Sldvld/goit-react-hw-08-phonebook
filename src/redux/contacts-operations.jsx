// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import storage from 'redux-persist/lib/storage';

// export const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params });
//       return { data: result.data };
//     } catch (axiosError) {
//       let err = axiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: axiosBaseQuery(),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: () => '/contacts',
//       method: 'GET',
//       providesTags: ['Contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: contactId => ({
//         url: `/contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     createContact: builder.mutation({
//       query: ({ data }) => ({
//         url: '/contacts',
//         method: 'POST',
//         body: {
//           name,
//           phone,
//         },
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

// const persistConfig = {
//   key: 'contactsApi',
//   storage,
// };

// export const {
//   useFetchContactsQuery,
//   useCreateContactMutation,
//   useDeleteContactMutation,
// } = contactsApi;
