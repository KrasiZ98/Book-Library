import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { updateUserValidation } from '../../components/update-user/updateUserValidation';

export default function useUpdateUser() {

    const { users, user, updateUser } = useContext(AuthContext);

    console.log(user.id)

    const [formValue, setFormValue] = useState({
        email: user.email,
        username: user.username,
        image: user.image,
        password: user.password,
        reppass: user.reppass,
        favoriteBook: user.favoriteBook
    });

    const [formError, setFormError] = useState({});

    function onChange(e) {
        setFormValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }

    function onSubmit(event) {
        event.preventDefault();
        const error = updateUserValidation(formValue);
        setFormError(error);

        if (Object.values(error).length === 0) {
            updateUser(user.id, formValue)
        }
    }

    return { formValue, formError, onChange, onSubmit };
} 
