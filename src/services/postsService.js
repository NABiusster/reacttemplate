import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postsService =  {
    getAll: ()=>axiosService(urls.posts.all)
}
export {postsService}