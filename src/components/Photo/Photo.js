import React from 'react';

const photo = (props) => {
  return (
    <React.Fragment>
        <div className="col-10 mx-auto col-sm-6 col-md-4 col-lg-3 my-2 border border-info">
            <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} className="img-card-top mx-auto p-2 " style={{height:"12rem",width:"100%"}} alt="ph" />
            <div className="card-body text-capitalize">
                <h6>{props.title}</h6>
            </div>
        </div>
    </React.Fragment>
  )
}

export default photo
