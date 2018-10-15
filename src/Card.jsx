import React from 'react';

const Card = (props) => {
    return (<div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.description}</h6>
        </div>
    </div>);
};

export default Card;