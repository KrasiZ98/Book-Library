import { createContext, useState } from "react";
import useGetAllBooks from "../custom-hooks/hooks-requests/useGetAllBooks";

export const BookContext = createContext();


const BookContextProvider = (props) => {

    const { books, setBooks, loading, fetchError } = useGetAllBooks([]);
    const [filterBooks, setFilterBooks] = useState([]);

    function searchCategory(value) {

        const filteredBooks = books.filter(book => {
            const lowercasedValue = String(value).toLowerCase();
            return book.author.toLowerCase().includes(lowercasedValue) ||
                book.rating === Number(lowercasedValue) ||
                book.genre.toLowerCase().includes(lowercasedValue) ||
                book.title.toLowerCase().includes(lowercasedValue)
        });

        if(filterBooks) {
            setFilterBooks(filteredBooks);

        }

    }


    return (
        <BookContext.Provider value={{
            books,
            loading,
            fetchError,
            filterBooks,
            searchCategory
        }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;