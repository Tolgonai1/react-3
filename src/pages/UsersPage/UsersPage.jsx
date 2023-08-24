import {useEffect, useState} from "react";
import axios from "axios";
import "./usersPage.css"
import {Link} from "react-router-dom";

export function UsersPage(){
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/users')
            .then(resp => setUsers(resp.data.users))
    },[])
    return (
        <div className='users-wrapper'>
            {users.map(user => (
                <ol key={user.id}>
                    <li>
                        <Link to={`/users/${user.id}`}>
                            <img src={user.image} alt=""/>
                            <h3>{user.firstName} {user.lastName}</h3>
                        </Link>
                    </li>
                </ol>
            ))}
        </div>
    )
}