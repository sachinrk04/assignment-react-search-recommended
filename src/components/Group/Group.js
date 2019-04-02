import React from 'react';

const group = (props) => {
  return (
    <React.Fragment>
        <div className="col-6 mx-auto col-sm-3 col-md-2 col-lg-2 my-2 border border-info">
            <img 
                src={`http://farm${props.iconfarm}.staticflickr.com/${props.iconserver}/buddyicons/${props.nsid}.jpg`} 
                className="img-card-top responsive p-2" style={{height:"6rem", width:"100%"}} alt="gjds" />
            <div className="card-body text-capitalize">
                <h6>{props.name}</h6>
            </div>
        </div>
    </React.Fragment>
  )
}

export default group;
