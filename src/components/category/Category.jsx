import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmploymentInformation from '../../pages/employment_information/EmploymentInformation.js';

const Category = () => {
    return (
        <Router>
            <div className='d-flex justify-content-around row'>
                <ul className="list-inline ms-4 ">
                    <li className="list-inline-item me-4"><a className='' href='/Employment-information'>employment information</a></li>
                    <li className="list-inline-item me-4"><a className='' href=''>positions</a></li>
                    <li className="list-inline-item me-4"><a className='' href=''>new employee/intern</a></li>
                    <li className="list-inline-item me-4"><a className='' href=''>Company/salary</a></li>
                    <li className="list-inline-item me-4"><a className='' href=''>Career development</a></li>
                    <li className="list-inline-item me-4"><a className='' href=''>Community</a></li>
                </ul>
            </div>
            
        </Router>
    )

}

export default Category;
