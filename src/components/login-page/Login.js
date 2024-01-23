import { Link } from 'react-router-dom'
import './login.css'
import React, { useContext } from 'react'
import useFormLogin from '../../custom-hooks/hooks-forms/useFormLogin'
import { ErrorBox } from '../error-box/ErrorBox'
import { AuthContext } from '../../context/AuthContext'

export const Login = () => {
  const { serverError } = useContext(AuthContext);
  const { formValue, formError, onSubmit, onChange } = useFormLogin();
  return (
    <>
      {serverError && <ErrorBox error={serverError} />}
      {formError.email && <ErrorBox error={formError.email} />}
      {formError.password && <ErrorBox error={formError.password} />}

      <section className="login-page">

        <div className="form">

          <form onSubmit={onSubmit}>

            <h1>Login</h1>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="alex@abv.bg"
                onChange={onChange} value={formValue.email} />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="******"
                onChange={onChange} value={formValue.password} />
            </div>

            <div className="form-group">
              <button type="submit" className="submit-btn">Login</button>
            </div>
          </form>

          <span>Don't An Have Account <Link to="/register">Register</Link></span>

        </div>

      </section>
    </>
  )
}
