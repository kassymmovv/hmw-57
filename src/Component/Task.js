import React from 'react';
import nanoid from 'nanoid'

const Task = props => {
    return (
        <div key={nanoid()} >
        <p>Name:{props.name}, price:{props.price} KGS</p>
   <button onClick={props.remove}>remove</button>
        </div>
);
};

export default Task;