import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService = {
    getAll: () => apiService.get(urls.comments.getAll),
    getById: (id) => apiService.get(urls.comments.getById(id)),
    create: (data) => apiService.post(urls.comments.getAll, data)
}
export {commentsService}