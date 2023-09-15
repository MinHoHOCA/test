import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const Navbar = () => {
  return (
    <>
      <div className='d-flex justify-content-around mt-2 h-50 w-full '>
        <div>
          <span>Logo</span>
        </div>
        <div>
          <button className='btn'>login</button>
        </div>
      </div>
      <hr></hr>
    </>
  )
}

export default Navbar;
