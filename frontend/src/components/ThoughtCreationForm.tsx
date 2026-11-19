import {useForm} from "react-hook-form";
import {thoughtCreationSchema, type thoughtCreationType} from "../types/FormTypes.ts";
import {useEffect} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postThought} from "../services/ThoughtService.ts";
import type {postThoughtData} from "../types/ThoughtType.ts";
import {toast} from "react-toastify";
import * as axios from "axios";
import {zodResolver} from "@hookform/resolvers/zod";

export default function ThoughtCreationForm(prop:{isCreating:boolean, setIsCreating:() => void}){
    const queryClient = useQueryClient();

    const {handleSubmit, register, formState:{errors,isSubmitting}} = useForm<thoughtCreationType>({
        resolver:zodResolver(thoughtCreationSchema)
    })
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
            prop.setIsCreating();
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
        console.log(thoughtData)
        postThoughtMutation.mutate(thoughtData);
    }

    return (
        <div className="createFromContainer">
            <dialog id="creationDialogue" className="bg-[#2e4285] rounded-[20px] p-4 animate-[pop-in_0.3s_cubic-bezier(0.175,0.885,0.32,1.2)_forwards] backdrop:bg-black/50 border-none outline-none text-white max-w-md w-full">
                <h1 className="text-white text-xl font-bold text-center mb-4 bg-transparent">Create a thought!</h1>
                <form className="bg-transparent flex flex-col gap-2" onSubmit={handleSubmit(submitHandler)}>
                    <div className="inputContainer bg-[#2e4285] flex flex-col pb-1.5">
                        <label className="creationFormLabel text-[#b3adad] bg-transparent text-sm mb-1">Name of the task</label>
                        <input {...register("name")} type={"text"} placeholder={"Name"}
                        required={true} className="text-white rounded-[20px] border border-black p-1.5 outline-none focus:border-orange-500 bg-transparent transition-colors"/>
                        {errors.name && (
                            <span className="text-red-500 text-xs mt-1">
                                    {errors.name.message}
                             </span>
                        )}
                    </div>
                    <div className="inputContainer bg-[#2e4285] flex flex-col pb-1.5">
                        <label className="creationFormLabel text-[#b3adad] bg-transparent text-sm mb-1">Date of the beginning for the task</label>
                        <input {...register("dateOfCreation", {valueAsDate: true})} type={"date"} required={false} className="text-white rounded-[20px] border border-black p-1.5 outline-none focus:border-orange-500 bg-transparent transition-colors"/>
                        {errors.dateOfCreation && (
                            <span className="text-red-500 text-xs mt-1">
                                    {errors.dateOfCreation.message}
                             </span>
                        )}
                    </div>
                    <div className="inputContainer bg-[#2e4285] flex flex-col pb-1.5">
                        <label className="creationFormLabel text-[#b3adad] bg-transparent text-sm mb-1">The due date of the task</label>
                        <input {...register("dateDue", {valueAsDate: true})} type={"date"} required={true} className="text-white rounded-[20px] border border-black p-1.5 outline-none focus:border-orange-500 bg-transparent transition-colors"/>
                        {errors.dateDue && (
                            <span className="text-red-500 text-xs mt-1">
                                    {errors.dateDue.message}
                             </span>
                        )}
                    </div>
                    <div className="inputContainer bg-[#2e4285] flex flex-col pb-1.5">
                        <label className="creationFormLabel text-[#b3adad] bg-transparent text-sm mb-1">Give a short description of the task</label>
                        <input {...register("description")} type={"text"} placeholder={"Short Description of the task"}
                        required={false} className="text-white rounded-[20px] border border-black p-1.5 outline-none focus:border-orange-500 bg-transparent transition-colors"/>
                        {errors.description && (
                            <span className="text-red-500 text-xs mt-1">
                                    {errors.description.message}
                             </span>
                        )}
                    </div>
                    <div className="actionButtons bg-[#2e4285] grid grid-cols-2 gap-1.5 pt-4">
                        <button className="closeButton rounded-[20px] border-none text-white bg-[#8b0000] hover:bg-red-600 py-1.5 px-4 cursor-pointer transition-colors duration-300"
                                onClick={prop.setIsCreating} type={"button"}>Close</button>
                        <button className="submitButton rounded-[20px] border-none text-white bg-[#006400] hover:bg-green-600 py-1.5 px-4 cursor-pointer transition-colors duration-300 disabled:opacity-50"
                                type="submit" disabled={isSubmitting}>{isSubmitting ? "Creating...": "Create"}</button>
                    </div>
                </form>
            </dialog>
        </div>
    )
}
