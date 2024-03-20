import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user=useLoaderData();
    const {name,username,email,phone,website}=user;
    const userStyle={
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={userStyle}>
           <h2>Deatails about user: {name}</h2> 
           <h2>Username: {username}</h2> 
           <h2>User email: {email}</h2> 
           <h2>User cell No: {phone}</h2> 
           <h2>Uuser website: {website}</h2> 
        </div>
    );
};

export default UserDetails;