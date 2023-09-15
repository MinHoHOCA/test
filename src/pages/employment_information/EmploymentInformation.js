import React from 'react'
import Form from 'react-bootstrap/Form';
import { Filter } from '../../components/filter/Filter';
import { ListJob } from '../../components/list_jobs/ListJob';
import { JobDetail } from '../../components/job_detail/JobDetail';

const EmploymentInformation = () => {
    return (
        <>
            <Filter/>
            <div className='row  mt-5'>
                <div className='col-sm-12 col-md-4 overflow-auto' data-bs-spy="scroll"  data-bs-offset="0" tabindex="0">
                    <ListJob/>
                    <ListJob/>
                    <ListJob/>
                    <ListJob/>
                </div>
                <div className='col-md-8'>
                    <JobDetail/>
                </div>
            </div>
        </>
    )
}

export default EmploymentInformation
