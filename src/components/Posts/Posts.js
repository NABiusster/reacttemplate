import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
import {postsService} from "../../services/postsService";
import {PostDetails} from "../PostDetails/PostDetails";
import styles from "./posts.module.css"

const
    Posts = () => {
        const [posts, setPost] = useState([])
        const [postDetails,setPostDetails] = useState(null)
        useEffect(() => {
            postsService.getAll().then(({data}) => setPost(data))
        }, []);

        const getCurrentPost = (post) =>{
            setPostDetails(post)
        }
        return (
            <div className={styles.container}>
                <div>
                    {posts.map(post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)}

                </div>
                {postDetails && <PostDetails postDetails={postDetails}/>}
            </div>

        );
    };

export {Posts};