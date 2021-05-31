import React, { card } from 'react'



class Signup extends React.Component {

  render = () => {
    return (
      <>
        <card>
            <h2>Sign Up</h2>
            <form>
                <div id="email">
                    <label>Email</label>
                    <input type="email"   required/>
                </div>
                <div id="password">
                    <label>Password</label>
                    <input type="password"   required/>
                </div>
                <div id="password-confirm">
                    <label>Password Confirmation</label>
                    <input type="email"  required/>
                </div>
                <button type="submit">
                    Sign Up
                </button>
                
            </form>
        </card>
        <div>
            Already have an account? Log In
        </div>
    </>
     
    )
  }
}

export default Signup