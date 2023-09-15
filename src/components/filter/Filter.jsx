import React from 'react'
import Form from 'react-bootstrap/Form';

export const Filter = () => {
  return (
    <>
    <form>
        <div class="row">
            <div class="col-md-2">
                {/* <input type="text" class="form-control" placeholder="First name" /> */}
                <Form.Select aria-label="Default select example" className='p-3'>
                    <option>select planet...</option>
                    <option value="1">Mars</option>
                    <option value="2">Venus</option>
                    <option value="3">Earth</option>
                </Form.Select>
            </div>
            <div class="col-md-4">
                <input type="text" class="form-control p-3" placeholder="Enter keyword skill, job title...." />
            </div>
            <div class="col-md-3">
                {/* <input type="text" class="form-control" placeholder="Last name" /> */}
                <Form.Select aria-label="Default select example" className='p-3'>
                    <option>select  visa...</option>
                    <option value="1">Visa subsidy available</option>
                    <option value="2">No Visa subsidy available</option>
                </Form.Select>
            </div>
            <div class="col-md-1">
                <button type="button" class="btn btn-secondary p-3">Search</button>
            </div>
        </div>
    </form>
</>
  )
}
