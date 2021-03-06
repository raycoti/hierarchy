import React, { Component } from 'react';
import NavBar from './navbar'
const Root = function({children,location}) {
  const name=location.pathname;
    return (
      <div>
        <nav className="navbar Head navbar-toggleable-md navbar-light bg-faded"> 
        </nav>
        <div className="container-fluid">
          <NavBar thePath={location.pathname} />
          {children}
        </div>
      </div>
    )
  }

export default Root;

/*{name === '/' && <SubHeader img={'soulSearching.png'} text={'Blurring the line between dreams and reality'} /> }
        {// subheader container
        }
        {name !== '/' && <SubHeader img={'soulSearching.png'} text={'Blurring the line between dreams and reality'} />}*/