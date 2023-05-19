import axios from "axios";
import { APIKey } from "./movieApiKey";


export default axios.create({
    baseURL: "https://moviesdatabase.p.rapidapi.com",
    headers: {
        'X-RapidAPI-Key': APIKey,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
})