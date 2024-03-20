import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users=useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>This is our Users Page{users.length}</h2>
            <p>All users are here</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;