import {useForm} from "react-hook-form";
import type {thoughtCreationType} from "../types/FormTypes.ts";
import {useEffect} from "react";
import "../css/ThoughtCreationFormCSS.css"
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postThought} from "../services/ThoughtService.ts";
import type {postThoughtData} from "../types/ThoughtType.ts";
import {toast} from "react-toastify";
import * as axios from "axios";

export default function ThoughtCreationForm(prop:{isCreating:boolean, setIsCreating:() => void}){
    const queryClient = useQueryClient();

    const {handleSubmit, register, formState:{errors,isSubmitting}} = useForm<thoughtCreationType>()
    useEffect(() => {
        const dialog = document.getElementById("creationDialogue") as HTMLDialogElement;
        if (prop.isCreating){
            dialog.showModal();
        }
        else
            dialog.close();
    }, [prop.isCreating]);

    const postThoughtMutation = useMutation({
        mutationFn:(thoughtData:postThoughtData) => postThought(thoughtData),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["allThoughts"],exact: false});
            toast.success("Thought added successfully!");
        },
        onError:(error) =>{
            if (error instanceof Error){
                if(axios.isAxiosError(error)){
                    toast.error(error.response?.data.message);
                }else {
                    toast.error("Something went wrong");
                    console.log((error as Error).message);
                }
            }

        }
    })

    return (
        <div className="createFromContainer">
            <dialog id = "creationDialogue">›
                <h1>Create a thought!</h1>
                <form>
                    <div className={"inputContainer"}>
                        <label>Name of the task</label>
                        <input {...register("name")} type={"text"} placeholder={"Name"}
                        required={true}/>
                        {errors.name && (
                            <span className="text-red-500 text-xs mt-1">
                                    {errors.name.message}
                             </span>
                        )}
                    </div>
                    <div className={"inputContainer"}>
                        <label>Date for the task</label>
                        <input {...register("date")} type={"date"} required={false}/>
                        {errors.date && (
                            <span className="text-red-500 text-xs mt-1">
                                    {errors.date.message}
                             </span>
                        )}
                    </div>
                    <div className={"inputContainer"}>
                        <label>Give a short description of the task</label>
                        <input {...register("name")} type={"text"} placeholder={"Short Description of the task"}
                        required={false}/>
                        {errors.description && (
                            <span className="text-red-500 text-xs mt-1">
                                    {errors.description.message}
                             </span>
                        )}
                    </div>
                </form>
                    <div className="actionButtons">
                    <button className="closeButton"
                    onClick={prop.setIsCreating}>Close</button>
                    <button className="submitButton">Create</button>
                </div>
            </dialog>
        </div>
    )
}