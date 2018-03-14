import React, { Component } from 'react';

const UserProfile = (props) => {
    return (
        <div>
            <div className='user-profile'>
                <img src={props.user.photoURL} />
            </div>
            <p>name: {props.user.displayName}</p>
            <p>email: {props.user.email}</p>
        </div>
    );
}
export default UserProfile;