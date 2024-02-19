const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment
    return (
        <div className={"container"}>
            <div>id:{id}</div>
            <div>postId:{postId}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Comment};