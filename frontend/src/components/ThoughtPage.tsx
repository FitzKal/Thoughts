import "../css/ThoughtPageCSS.css";
import SingleThought from "./SingleThought.tsx";
import {useQuery} from "@tanstack/react-query";
import {getAllThoughts} from "../services/ThoughtService.ts";
import {useEffect, useState} from "react";
import type {ThoughtType} from "../types/ThoughtType.ts";
import ThoughtCreationForm from "./ThoughtCreationForm.tsx";

export default function ThoughtPage() {

    const {data,isLoading,isError,error} = useQuery({
        queryKey:["allThoughts"],
        queryFn: async () => await getAllThoughts(),

    })

    const [isCreating, setIsCreating] = useState(false);



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

    const handleCreation = ()=>{
        setIsCreating(!isCreating)
    }


    if (!isLoading){
        return (
            <>
                <h1>Thought Page</h1>
                <div className="buttonContainer">
                    <button className={"thoughtAdder"} onClick={handleCreation}>Add a new thought</button>
                </div>
                {
                    isCreating?<ThoughtCreationForm isCreating={isCreating} setIsCreating={handleCreation}/>:
                        <></>
                }
                <div className={"ThoughContainer"}>
                    {
                        data.map((thought:ThoughtType) => {
                            return (
                                <SingleThought thought={thought}/>
                            )
                        })
                    }
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