import React, {Component} from "react";

class Register extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            confirm_password: this.confirmPassword
        }
        console.log(data)
    }


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>


                <div className='form'>
                    <label>First Name</label>
                    <input 
                        type="text" placeholder="First Name"
                        onChange={e => this.firstName = e.target.value}
                    />
                </div>

                <div className='form'>
                    <label>Last Name</label>
                    <input 
                        type="text" placeholder="Last Name"
                        onChange={e => this.lastName = e.target.value}

                    />
                </div>

                <div className='form'>
                    <label>Email</label>
                    <input 
                        type="text" placeholder="Email"
                        onChange={e => this.email = e.target.value}

                    />
                </div>

                <div className='form'>
                    <label>Password</label>
                    <input 
                        type="text" placeholder="Password"
                        onChange={e => this.password = e.target.value}

                    />
                </div>

                <div className='form'>
                    <label>Confirm Password</label>
                    <input 
                        type="text" placeholder="Confirm Password"
                        onChange={e => this.confirmPassword = e.target.value}
                    />
                </div>

                <button>Submit</button>
            </form>
        )
    }
}


export default Register