import React, { useEffect, useState } from 'react'

function getLocalStorage(key, initialValue) {
    const storage_data = JSON.parse(localStorage.getItem(key))

    if (storage_data instanceof Function) {
        return storage_data();
    }

    return storage_data ? storage_data : initialValue;

}

export default function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(() => {
        return getLocalStorage(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}
