import React from 'react'
import {
    Nav,
    NavLink,
    NavMenu
} from './NavbarStyling'

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to='/'>
                <h1>Pintereach</h1>
            </NavLink>
            <NavMenu>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/addarticle'>Add Article</NavLink>
                <NavLink to='/articles'>Article Suggestions</NavLink>
                <NavLink to='/saved-articles'>Saved Articles</NavLink>
                <NavLink to='/login'>Log in</NavLink>
            </NavMenu>
        </Nav>
            
        </>
    )
}

export default Navbar
