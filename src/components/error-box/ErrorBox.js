import './errorBox.css'
import React, { useEffect } from 'react'

export const ErrorBox = ({ error }) => {
    useEffect(() => {
        setTimeout(() => {
            error = ""
        }, 3000)
    }, [])
    return (
        <div className="error-box">
            <p> {error}</p>

        </div>
    )
}
