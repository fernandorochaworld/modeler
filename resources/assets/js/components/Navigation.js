import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends Component {

    render() {
        return (
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/new'>New</NavLink>
                <NavLink to='/old'>Old</NavLink>
            </div>
        );
    }
}
