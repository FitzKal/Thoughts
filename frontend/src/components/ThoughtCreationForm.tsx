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

    const submitHandler =(thoughtData:postThoughtData) =>{
        postThoughtMutation.mutate(thoughtData);
    }

    return (
        <div className="createFromContainer">
            <dialog id = "creationDialogue">›
                <h1>Create a thought!</h1>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className={"inputContainer"}>
                        <label className={"creationFormLabel"}>Name of the task</label>
                        <input {...register("name")} type={"text"} placeholder={"Name"}
                        required={true}/>
                        {errors.name && (
                            <span className="text-red-500 text-xs mt-1">
                                    {errors.name.message}
                             </span>
                        )}
                    </div>
                    <div className={"inputContainer"}>
                        <label className={"creationFormLabel"}>Date of the beginning for the task</label>
                        <input {...register("dateOfCreation")} type={"date"} required={false}/>
                        {errors.dateOfCreation && (
                            <span className="text-red-500 text-xs mt-1">
                                    {errors.dateOfCreation.message}
                             </span>
                        )}
                    </div>
                    <div className={"inputContainer"}>
                        <label className={"creationFormLabel"}>The due date of the task</label>
                        <input {...register("dateDue")} type={"date"} required={true}/>
                        {errors.dateDue && (
                            <span className="text-red-500 text-xs mt-1">
                                    {errors.dateDue.message}
                             </span>
                        )}
                    </div>
                    <div className={"inputContainer"}>
                        <label className={"creationFormLabel"}>Give a short description of the task</label>
                        <input {...register("description")} type={"text"} placeholder={"Short Description of the task"}
                        required={false}/>
                        {errors.description && (
                            <span className="text-red-500 text-xs mt-1">
                                    {errors.description.message}
                             </span>
                        )}
                    </div>
                    <div className="actionButtons">
                        <button className="closeButton"
                                onClick={prop.setIsCreating}>Close</button>
                        <button className="submitButton" type={"submit"} disabled={isSubmitting}>Create</button>
                    </div>
                </form>
            </dialog>
        </div>
    )
}