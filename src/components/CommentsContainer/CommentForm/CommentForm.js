import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {commentsService} from "../../../services/commentsService";
import {commentValidator} from "../../../validators/commentValidator";


const CommentForm = ({setComment}) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        mode:"all",
        resolver:joiResolver(commentValidator)
    })
    let postComment  = async (comment)=> {
await commentsService.create(comment).then(({data})=>setComment(prev=>[...prev,data]))
        reset()
        console.log(errors);
    };
    return (
        <div className={"container"}>
            <h2>Create comment</h2>
            <form onSubmit={handleSubmit(postComment)}>
                <input type="text" placeholder={'postID'} {...register("postId",{ valueAsNumber: true})} defaultValue={1} />
                <input type="text" placeholder={'name'} {...register("name")} />
                <input type="text" placeholder={'email'} {...register("email")} />
                <input type="text" placeholder={'body'} {...register("body")} />
                <button>Create</button>
            </form>
            {errors.name && (<div>{errors.name.message}</div>)}
            {errors.email && (<div>{errors.email.message}</div>)}
            {errors.body && (<div>{errors.body.message}</div>)}
            {errors.postId && (<div>{errors.postId.message}</div>)}
        </div>
    );
};

export {CommentForm};