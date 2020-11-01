import React, {useState} from 'react'
import { Link } from 'react-router-dom' ;

function navBar() {
    return (
      <> 
      <nav className="navbar">
      <div className="navbar-container">
        <link to="/" className="navbar-logo">
            TRVL <i className='fab fa-typo3' />
        </link>
      </div>
      </nav> 
      </>

    )
}

export default navBar
