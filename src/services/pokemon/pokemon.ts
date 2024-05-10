import axios from "axios";
import { axiosInstance } from "./config"


export const getAll = async () => {
    try {
        const response = await axiosInstance.get("pokemon");
        return response;
        //console.log(response);
    }
    catch(error) {
        console.error(error)
    }
    
}


export const getPokemon = async(url : string) => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        // TODO: Lanzar excepción
        console.log(error);
    }
}