import React from 'react'

// import likes from './public/images/like.png'

const ContentInfomation = () => {
    return (
        <>
            <div className='col-md-11'>
                <div className='row'>
                    <div className='col'>
                        <img src='/images/user.png' height={10} width={10}></img>
                    </div>
                    <div className='col-md-11'>
                        <p className="card-text text-start">The most prominent message boards in the past week</p>
                    </div>
                    
                </div>
            </div>
            <div className='col-md-1'>
                <div className='row'>
                    <div className='col-md-12'>
                        {/* <p className="card-text text-end">c</p> */}
                        <a href=''><img src="/images/message.png" height={25} width={15} /></a> <span className='p-'>0</span>

                        <a href=''><img src="/images/like.png" height={25} width={15} /></a><span>0</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentInfomation;