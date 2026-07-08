import "../css/ThoughtPageCSS.css";
import SingleThought from "./SingleThought.tsx";
import {useQuery} from "@tanstack/react-query";
import {getAllThoughts} from "../services/ThoughtService.ts";
import {useEffect} from "react";

export default function ThoughtPage() {

    const {data,isLoading,isError,error} = useQuery({
        queryKey:["allThoughts"],
        queryFn: async () => await getAllThoughts(),

    })

    useEffect(() => {
        if (isError){
            console.log(error);
        }
    }, [error, isError]);

    useEffect(() => {
        if (!isLoading){
            console.log(data);
        }
    }, [data,isLoading]);


    if (!isLoading){
        return (
            <>
                <h1>Thought Page</h1>
                <div>
                    <SingleThought thought ={data[0]}/>
                </div>
            </>
        )
    }else {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }
}