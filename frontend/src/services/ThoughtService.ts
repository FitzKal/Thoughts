//IsAlive
import api from "./AxiosConfig.ts";

export const isAlive  = async () =>{
   try {
        return await api.get("/thoughts/isAlive")
            .then(response => response.data)
            .then(data => console.log(data));
   }catch (error){
        console.log((error as Error).message);
   }
}

export const getAllThoughts = async () => {
    try{
        return await api.get("/thoughts")
            .then(response => response.data);
    }catch (error) {
        console.error((error as Error).message);
        throw error;
    }

}