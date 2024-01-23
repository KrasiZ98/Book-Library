import React from 'react'
import useUpdateUser from '../../custom-hooks/hooks-forms/useUpdateUser'
import { ErrorBox } from '../error-box/ErrorBox';

export const UpdateUser = () => {
    const {formValue, formError, onChange, onSubmit} = useUpdateUser();
    
  return (
    <>

          {formError.email && <ErrorBox error={formError.email} />}
          {formError.username && <ErrorBox error={formError.username} />}
          {formError.image && <ErrorBox error={formError.image} />}
          {formError.password && <ErrorBox error={formError.password} />}
          {formError.reppass && <ErrorBox error={formError.reppass} />}
    
          <section className="login-page">
    
    
            <div className="form">
    
              <form 
              onSubmit={onSubmit}
              >
    
                <h1>Update User</h1>
    
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" placeholder="alex@abv.bg"
                    onChange={onChange} value={formValue.email} 
                    />
                </div>
    
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" placeholder="alex98"
                    onChange={onChange} value={formValue.username} 
                    />
                </div>
    
                <div className="form-group">
                  <label htmlFor="image">Image User</label>
                  <input type="text" name="image" placeholder="https://"
                    onChange={onChange} value={formValue.image} 
                    />
                </div>
    
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="******"
                    onChange={onChange} value={formValue.password} 
                    />
                </div>
    
                <div className="form-group">
                  <label htmlFor="reppass">Confirm Password</label>
                  <input type="password" name="reppass" placeholder="******"
                    onChange={onChange} value={formValue.reppass} 
                    />
                </div>
    
                <div className="form-group">
                  <button type="submit" className="submit-btn">Update</button>
                </div>
              </form>
    
            
    
            </div>
    
          </section>
        </>
  )
}
