import React, { useEffect, useState } from 'react';
import { addToStorage } from '../../utilities/storage';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1>Users list:{users.length}</h1>
            <div className='users'>
                {users.map(user => <DisplayUser key={user.id} user={user}></DisplayUser>)}
            </div>
        </div>
    );
};

const UserDetail = name => {
    // console.log('details', id);
    addToStorage(name);
}

const DisplayUser = props => {
    const { name, email } = props.user
    return (
        <div className='user'>
            <h2>{name}</h2>
            <p><small>{email}</small></p>
            <button onClick={() => UserDetail(name)}>Details</button>
        </div>
    );
}

export default Users;