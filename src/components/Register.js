import React, {Component} from "react";

class Register extends React.Component {
    render(){
        return (
            <form>
                <h3>Sign Up</h3>
                <div className='form'>
                    <label>First Name</label>
                    <input type="text" placeholder="First Name"/>
                </div>

                <div className='form'>
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name"/>
                </div>

                <div className='form'>
                    <label>Email</label>
                    <input type="text" placeholder="Email"/>
                </div>

                <div className='form'>
                    <label>Password</label>
                    <input type="text" placeholder="Password"/>
                </div>

                <div className='form'>
                    <label>Confirm Password</label>
                    <input type="text" placeholder="Confirm Password"/>
                </div>

                <button>Submit</button>
            </form>
        )
    }
}