import React, { useState } from 'react';


const ReviewCard = (props) => {
    const {image,name,job,description} = props.review;
  
    return (
        <div className="card shadow-sm">
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={image} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{job}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{description}</p>
            </div>
            
       </div>
    );
};

export default ReviewCard;