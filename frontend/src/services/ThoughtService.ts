
//IsAlive
import api from "./AxiosConfig.ts";

export const isAlive  = async () =>{
   try {
        return await api.get("/isAlive")
            .then(response => response.data)
            .then(data => console.log(data));
   }catch (error){
        console.log((error as Error).message);
   }
}