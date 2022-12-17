import axios, {AxiosInstance} from "axios";

const http: AxiosInstance = axios.create({
    baseURL: 'https://api.doglink.net'
})

export default http;
