import {useEffect, useState} from "react";

import {Comment} from "../Comment/Comment";
import {commentsService} from "../../../services/commentsService";
import {CommentForm} from "../CommentForm/CommentForm";

const Comments = () => {
    const [comments, setComment] = useState([])
    useEffect(() => {
            commentsService.getAll().then(({data})=>setComment(data))},
        []);
    return (
        <div>
            <CommentForm setComment={setComment}/>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};