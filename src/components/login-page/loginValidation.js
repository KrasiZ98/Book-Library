export default function loginValidation(value) {

    const error = {};

    if (value.email === "") {
        error.email = "Email is required!!!";
    }
    
    if (value.password === "") {
        error.password = "Password is required!!!";
    }

    return error;
}
