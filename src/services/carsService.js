import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carsService= {
    getAll:()=>apiService.get(urls.cars.baseURL),
    create:(data)=>apiService.post(urls.cars.baseURL,data),
    deleteById:(id)=>apiService.delete(urls.cars.byId(id)),
    updateById:(id, data)=>apiService.put(urls.cars.byId(id),data)
}
export {carsService}