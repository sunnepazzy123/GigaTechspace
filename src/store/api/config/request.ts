import axios from "axios";


const BASE_URL = "https://rekrutacjaweb.gigatechspace.net";


export const request = axios.create({
  baseURL: BASE_URL,
});





