import React, { useEffect, useState } from 'react'
import { USER_REQ_URL_API } from '../../api/api';

export default function useGetAllUsers(initialValue) {
    const [users, setUsers] = useState(initialValue);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(USER_REQ_URL_API);

                if (response.ok === false) {
                    const error = await response.json();
                    throw new Error(`HTTP error! Status: ${error.message}`);
                }

                const result = await response.json();
                setUsers(result);

            } catch (error) {
                console.error(error.message, ": Error fetch data use get all books");

            }
        }

        fetchData();

    }, []);

    return [users, setUsers];

}
