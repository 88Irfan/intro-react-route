import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post=useLoaderData();
    const navigate=useNavigate();
    const {postId}=useParams();

    const {id,title,body}=post;
    const handleGoBack=()=>{
        navigate(-1)

    }
    console.log(postId)
    return (
        <div>
            <h2>Details of post:{id}</h2>
            <p>Title of the post: {title}</p>
            <p> <small>{body}</small> </p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;