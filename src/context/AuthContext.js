import { createContext, useState } from "react";
import useLocalStorage from "../custom-hooks/hook-localStorage/useLocalStorage";
import { AUTH_KEY_STORAGE } from "../api/api";
import * as authServices from "../services/authServices";
import { useNavigate } from "react-router-dom";
import useGetAllUsers from "../custom-hooks/hooks-requests/useGetAllUsers";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [state, setState] = useLocalStorage(AUTH_KEY_STORAGE, []);
    const [users, setUsers] = useGetAllUsers([]);
    const [serverError, setServerError] = useState(null);
    const navigate = useNavigate();

    async function userLogin(user) {
        const allUsers = await authServices.getAllUsers();
        const existingUser = allUsers.find(x => x.email === user.email);
        if (existingUser === undefined) {
            setServerError('Email or Password don\t match');
            setTimeout(() => {
                setServerError(null);
            }, 7000);
            return serverError;
        }

        if (existingUser.password !== user.password) {
            setServerError('Email or Password don\t match');
            setTimeout(() => {
                setServerError(null);
            }, 7000);
            return serverError;
        }

        setState(existingUser);
        navigate('/');
    }

    async function userRegister(user) {
        const allUsers = await authServices.getAllUsers();
        if (allUsers !== undefined) {
            const existingEmail = allUsers.find(x => x.email === user.email);
            if (existingEmail) {
                setServerError('Email is taken!!!');

                setTimeout(() => {
                    setServerError(null);
                }, 7000);

                return serverError;
            }
            const existingUsername = allUsers.find(x => x.username === user.username);
            if (existingUsername) {
                setServerError('Username is taken!!!');
                setTimeout(() => {
                    setServerError(null);
                }, 7000);

                return serverError;
            }

            await authServices.register(user);

            setState(user);
            navigate('/');
        } else {
            await authServices.register(user);

            setState(user);
            navigate('/');
        }
    }

    function userLogout() {
        localStorage.clear(AUTH_KEY_STORAGE);
        setState({});
        navigate('/');
    }

    async function updateUser(userId, user) {
        const result = await authServices.updateUser(userId, user);
        setUsers(users.map(x => x.id === userId ? result : x));
        navigate('/profile');
        setState(user);
        console.log(userId, user)
    }

    async function removeUser(userId) {
        const choice = window.confirm('Are you sure you want to delete your data ?');
        if (choice) {
            await authServices.deleteUser(userId);
            setUsers(users.filter(x => x.id !== userId));
            setState({});
            navigate('/login')
        }

    }


    async function addFavoriteBooks(userId, book) {

        const addFavBooks = {
            ...state,
            favoriteBook: [...state.favoriteBook, book]
        }

        const result = await authServices.updateUser(userId, addFavBooks);
        setUsers(users.map(x => x.id === userId ? result : x));
        setState(addFavBooks);


    }

    async function deleteFavoriteBook(userId, bookId, book) {
        const deleteFavBooks = {
            ...state,
            favoriteBook: state.favoriteBook.filter(x => x.id !== bookId)
        }

        const choice = window.confirm('are you sure you want to delete ' + book);
        if (choice) {
            await authServices.updateUser(userId, deleteFavBooks);
            setUsers(users.filter(x => x.id !== bookId));
            setState(deleteFavBooks);
            navigate('/favorite')
        } else {
            return;
        }
    }


    return (
        <AuthContext.Provider value={{
            user: state,
            users,
            serverError,
            userLogin,
            userRegister,
            userLogout,
            updateUser,
            removeUser,
            addFavoriteBooks,
            deleteFavoriteBook,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;