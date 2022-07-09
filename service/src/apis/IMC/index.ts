import axios from "axios";

const apiIMC = axios.create({
    baseURL: 'http://localhost:5000'
})

export {apiIMC}