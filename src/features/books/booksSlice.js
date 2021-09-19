import { createSlice } from "@reduxjs/toolkit";
import { BOOKS } from "app/data";
export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: BOOKS,
    },
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
        },
        resetBooks: (state, action) => {
            state.books = [];
        }
    }
});

export const selectBooks = (state) => state.books.books;
export const filterBooks = (query, books) => Object.values(books).filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
export const { setBooks, resetBooks } = booksSlice.actions;
export default booksSlice.reducer;