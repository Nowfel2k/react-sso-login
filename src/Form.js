import React, { Component } from 'react'



class Form extends Component {

    inputStyle = {
        width: '30px'
    }


    head = {
        fontSize: '35px',
        paddingBottom: '20px'
    }

    render() {
        return (
            <div>
                <h1 style={this.head}>
                    Login
                </h1>

                {/* <label for="email">Email : </label> */}
                <input type="email" className={this.inputStyle} name="email" placeholder="Email" />
                <br />
                <br />
                {/* <label for="password">Password : </label> */}
                <input type="password" className={this.inputStyle} name="password" placeholder="Password" />
                <br />
                <br />
                <input type="submit" className="btn btn-primary" value="Login" disabled />

                <br /><br />
                <p>Create a new account
                <a className="btn btn-link" href="#">Register</a>
                </p>
            </div>
        )
    }
}

export default Form
