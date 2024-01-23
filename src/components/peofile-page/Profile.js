import './profile.css'
import React, { useContext } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from '../../context/AuthContext';
import { FaUserEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Profile = () => {
    const { user, updateUser, removeUser } = useContext(AuthContext);
    return (
        <div className="profile-page">

            <div className="profile">

                <h1>Profile</h1>
                <div className="btn-acction">
                    <button onClick={() => removeUser(user.id)}> <MdDeleteForever /> Delete Profile</button>
                    <Link to="/user-update">
                    <button> <FaUserEdit  /> Edit Profile</button>
                    </Link>
                </div>

                <div className="profile-info">

                    <div className="image">
                        <img src={user.image} alt="Profile Image" />
                    </div>

                    <div className="info">

                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>

                </div>


            </div>

        </div>
    )
}
