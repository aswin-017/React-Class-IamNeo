import React from 'react';
import ReactDOM from 'react-dom/client';

function Profile(props)
{
    return(
        <div>
            <label>Name</label>
            <span>{props.bio.name}</span>
            <label>Email</label>
            <span>{props.bio.email}</span>
            <label>Number</label>
            <span>{props.bio.number}</span>

        </div>
    )
}
export default Profile;