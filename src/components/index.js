import React from 'react'
import Navbar from './navbar/Navbar.jsx';
import Category from './category/Category.jsx';
import {Menu} from './menu/Menu.jsx';

const Main = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar></Navbar>
        <Category></Category>
        <hr></hr>
        <div className='container'>
            <Menu></Menu>
        </div>
        
    </div>
  )
}

export default Main;
