import styles from "./PostDetails.module.css"
const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails
    return (
        <div className={styles.details}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostDetails};