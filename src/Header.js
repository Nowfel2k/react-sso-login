import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="navbar-header">
                    <a href="#">
                        <span style={{color: 'white'}} className="navbar-brand logo">REACT SSO-Auth-Google</span>
                    </a>
                </div>
            </div>
        )
    }
}
