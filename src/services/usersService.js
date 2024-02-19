import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const usersService = {
    getAll:()=>apiService(urls.users.getAll),
    create:(user)=>apiService.post(urls.users.getAll, user)
}
export {usersService}