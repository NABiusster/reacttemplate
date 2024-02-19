const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'
const comments= '/comments'

const urls = {
    users: {
        getAll:users
    },
    comments:{
        getAll: comments,
        getById:(id)=>`${comments}/${id}`
    }

}
export {baseURL, urls}