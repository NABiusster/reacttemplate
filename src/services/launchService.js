import {axiosService} from "./axiosService";
import {urls} from "../constatnts/urls";

const launchService = {
    getAll: () => axiosService(urls.launches.getAll)
}
export {launchService}