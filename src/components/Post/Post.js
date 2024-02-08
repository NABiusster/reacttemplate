import style from "./Post.module.css"

const
    Post = ({post, getCurrentPost}) => {
        const {id, title} = post
        return (
            <div className={style.postContainer}>
                <div className={style.detailContainer}>
                    <div><b>id:</b></div>
                    <div>{id}</div>
                </div>
                <div className={style.detailContainer}>
                    <div><b>title:</b></div>
                    <div>{title}</div>
                </div>
                <button onClick={() => getCurrentPost(post)}>Details</button>
            </div>
        );
    };

export {Post};
