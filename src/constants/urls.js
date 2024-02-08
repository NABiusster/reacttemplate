const baseURL = "https://jsonplaceholder.typicode.com";

const posts= '/posts';
const urls= {
    posts:{
        all:posts,
        byId:(id)=>`${posts}/${id}`
    }
}
export {baseURL,urls}