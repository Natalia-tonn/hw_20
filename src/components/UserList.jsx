import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../redux/userSlice';

const UserList = () => {
    const users = useSelector(selectUsers);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                     <p>
    <strong>Name:</strong> {user.name} <span style={{ margin: '0 5px' }}></span> <strong>Email:</strong> {user.email}
</p>
                        <p></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;

