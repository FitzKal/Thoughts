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
    const [isDeleting, setIsDeleting] = useState(false);

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

    const handleDeleting = () =>{
        setIsDeleting(!isDeleting)
    }


    if (!isLoading){
        return (
            <>
                <h1 className="text-gray-400 text-center text-3xl font-bold my-4">Thought Page</h1>
                <div className="flex justify-center mb-5">
                    <button className="rounded-[10px] p-5 text-white bg-[rgba(7,136,29,0.3)] hover:bg-[rgba(13,204,59,0.3)] transition-colors duration-300 cursor-pointer" onClick={handleCreation}>Add a new thought</button>
                </div>
                {
                    isCreating?<ThoughtCreationForm isCreating={isCreating} setIsCreating={handleCreation}/>:
                        <></>
                }
                <div className="flex flex-row flex-wrap justify-center gap-x-10 gap-y-5 p-4">
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
                <h1 className="text-gray-400 text-center text-2xl font-bold mt-10">Loading...</h1>
            </>
        )
    }
}
