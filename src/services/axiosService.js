import axios from "axios";
import {baseURL} from "../constatnts/urls";

const axiosService = axios.create({baseURL})

export {axiosService}