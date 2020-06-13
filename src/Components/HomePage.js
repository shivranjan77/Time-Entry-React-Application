import React from 'react'

import {Link} from 'react-router-dom';
function HomePage() {
    return (
       
        <div>
            <Link to="Signin" >
            <button>Login</button>
            </Link>
            <Link to="/registration">
            <button >Register</button>
            </Link>
            
        </div>
       
    )
}

export default HomePage
