import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import loginValidation from '../../components/login-page/loginValidation';

export default function useFormLogin() {

    const { userLogin } = useContext(AuthContext);

    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
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
        const error = loginValidation(formValue);
        setFormError(error);

        if (Object.values(error).length === 0) {
            userLogin(formValue);
        }

        setTimeout(() => {
            setFormError({});
        }, 7000);

        console.log(formValue);
    }

    return { formValue, formError, onSubmit, onChange };
}
