import React from 'react'

export const JobDetail = () => {
  return (
    <>
      <div className="card pt-3 pb-3" >
        <div className="card-body text-start">
          <h5 className="card-title">job detail</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text pt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" class="btn btn-secondary">Apply now</button>
          <hr></hr>
          <div>
            <p> planet: </p>
            <p>destribution: </p>
            <p>skill: </p>
          </div>
          <p></p>
          <hr style={{ border: "1px dotted #000;" }}></hr>
          <div>
            <h5>reasons to join us</h5>
            <ul>
              <li>good</li>
            </ul>
          </div>
          <hr></hr>
          <div>
            <h5>Job description</h5>
            <p></p>
            <ul>
              <li>good</li>
            </ul>
          </div>
          <hr></hr>
          <div>
            <h5>Your skills and experience</h5>
            <ul>
              <li>good</li>
            </ul>
          </div>
          <hr></hr>
          <div>
            <h5>Why you'll love working here</h5>
            <ul>
              <li>env very good</li>
            </ul>
          </div>
          <div>
            <h5></h5>
          </div>
        </div>

      </div>
    </>
  )
}
