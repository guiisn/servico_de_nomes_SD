import axios from "axios";

const apiValidaCPF = axios.create({
    baseURL: 'http://localhost:4000'
})

export {apiValidaCPF}