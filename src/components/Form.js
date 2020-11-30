import React from 'react';

import MyContext from '../context/context';




function Form () {

    const formContext = React.useContext(MyContext)

    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formContext.email} onChange={(e)=>{formContext.setEmail(e.target.value)}}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={formContext.password} onChange={(e)=>{formContext.setPassword(e.target.value)}}/>
            </div>
    <button type="submit" className="btn btn-primary" onClick={(e)=>{formContext.modeSignUp ? formContext.createUser(e) : formContext.signIn(e)}}>{`${formContext.modeSignUp ? 'Sign Up' : 'Sign In'}`}</button>
      </form>
    )
}

export default Form;