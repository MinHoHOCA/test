import React from 'react'
import ContentInfomation from './ContentInfomation'

export const InfomationMessage = () => {
    return (
        <>
            <div>
                <div className='row'>
                    <div className='col-md-11'>
                        <h5 className="card-title text-start">HOT weekend</h5>
                    </div>
                    <div className='col-md-1'>
                        <a className='text-end'>More {">"}</a>
                    </div>
                </div>
                <div className='row'>
                    <ContentInfomation/>
                    <ContentInfomation/>
                    <ContentInfomation/>
                    <ContentInfomation/>
                    <ContentInfomation/>
                    <ContentInfomation/>
                    <ContentInfomation/>
                    <ContentInfomation/>
                    <ContentInfomation/>
                    <ContentInfomation/>
                    <ContentInfomation/>
                </div>
            </div>
        </>
    )
}
