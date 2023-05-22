import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64660601228bd07b35596438.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/users',
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/users/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: ({ name, phone }) => ({
        url: '/users',
        method: 'POST',
        body: {
          name,
          phone,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

const persistConfig = {
  key: 'contactsApi',
  storage,
};

export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;

export const persistedReducer = persistReducer(
  persistConfig,
  contactsApi.reducer
);
