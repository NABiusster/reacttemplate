import {useEffect, useState} from "react";

import {usersService} from "../../../services/usersService";
import {User} from "../User/User";
import {UserForm} from "../UserForm/UserForm";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, [])
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};