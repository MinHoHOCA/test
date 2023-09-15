import React from 'react'
import { InfomationMessage } from '../../components/infomation_message/InfomationMessage';

const Home = () => {
    return (
        <>
            <div className="container-fuild mt-5">
                <div className="row">
                    <div className="col-md-auto mt-1">
                        <div className="card text-white bg-primary" >
                            <div className="card-body text-start">
                                <h5 className="card-title">HOT</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col mt-1">
                        <div className="card text-white bg-info" >
                            <div className="card-body">
                                <h5 className="card-title">HOT</h5>
                                <h6 className="card-subtitle text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col mt-1">
                        <div className="card bg-light" >
                            <div className="card-body">
                                <h5 className="card-title">HOT</h5>
                                <h6 className="card-subtitle  text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className=' d-flex justify-content-start col-md-9 p-2 '>
                    <div className='col'>
                        <div className='row'>
                            <span className='col-md-4 text-start'>Comments</span>
                            <div className='col-md-7 p-1'>
                                <input className='form-control' placeholder="search...."></input>
                            </div>
                            <div className='col-md-1 p-1'>
                                <button className='btn btn-light'>search</button>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className="card  text-black h-100 p-3">
                              <InfomationMessage/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 p-2'>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
