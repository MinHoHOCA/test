import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../../pages/home/Home.js'
import Interview from '../../pages/interview/Interview.js'
import Professionnal from '../../pages/professionnal/Professionnal.js'
import EmploymentInformation from '../../pages/employment_information/EmploymentInformation.js'
export const Menu = () => {
    return (
        <Router>
            <div className='container'>
                <ul className="list-inline text-start">
                    <li className="list-inline-item me-4"><Link className='btn' to='/'>Home page</Link></li>
                    <li className="list-inline-item me-4"><a className='btn' href='/interview'>interview</a></li>
                    <li className="list-inline-item me-4"><a className='btn' href='/professional'>professional expert</a></li>
                </ul>
            </div>
            <hr className='mt-1'></hr>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route  path='/interview' element={<Interview />} />
                <Route  path='/professional' element={<Professionnal />} />
                <Route path='/Employment-information' element={<EmploymentInformation />} />
            </Routes>
        </Router>
    )
}
