import React, { useEffect, useState } from 'react'
import { BOOK_REQ_URL_API } from '../../api/api';

export default function useGetAllBooks(initialValue) {

    const [books, setBooks] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(BOOK_REQ_URL_API);

                if (response.ok === false) {
                    const error = await response.json();
                    throw new Error(`HTTP error! Status: ${error.message}`);
                }

                const result = await response.json();
                setBooks(result);

            } catch (error) {
                console.error(error.message, ": Error fetch data use get all books");
                setFetchError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, []);

    return { books, setBooks, loading, fetchError };
}
