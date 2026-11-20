import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import type {ThoughtType} from "../types/ThoughtType.ts";
import {useEffect, useRef} from "react";
import type {thoughtCreationType} from "../types/FormTypes.ts";
import {editThought} from "../services/ThoughtService.ts";
import {toast} from "react-toastify";
import {AxiosError} from "axios";

export default function EditThoughtForm(prop:{handleEditing: () => void, thoughtDetail:ThoughtType, isEditing:boolean }){
    const {register,handleSubmit, formState:{errors,isSubmitting}} = useForm<thoughtCreationType>({
        defaultValues:{
            dateOfCreation:prop.thoughtDetail.dateOfCreation,
            dateDue: prop.thoughtDetail.dateDue,
            description:prop.thoughtDetail.description,
            name: prop.thoughtDetail.name,
            stateOfProgress: prop.thoughtDetail.stateOfProgress
        }
    })
    const queryClient = useQueryClient();
    const dialogRef = useRef<HTMLDialogElement>(null);

    const editMutation = useMutation({
        mutationFn:(editDetails:thoughtCreationType) => editThought(editDetails,prop.thoughtDetail.id),
        onSuccess: () => {
            toast.success("Thought successfully edited")
            queryClient.invalidateQueries({queryKey:["allThoughts"],exact: false})
            prop.handleEditing()
        },
        onError:(error) => {
            if (error instanceof Error){
                if (error instanceof AxiosError){
                    console.log(error.response)
                    toast.error(error.response?.data)
                }else{
                    toast.error("Something went wrong")
                    console.log((error as AxiosError).response)
                    console.log((error as Error).message);
                }
            }
    }
    })

    const submitHandler = async (editDetails:thoughtCreationType) =>{
        editMutation.mutate(editDetails)
    }

    useEffect(() =>{
        if (prop.isEditing)
            dialogRef.current?.showModal()
        else
            dialogRef.current?.close()
    },[prop.isEditing])

    return (
        <div>
            <dialog ref={dialogRef} className="bg-[#2e4285] rounded-[20px] p-4 animate-[pop-in_0.3s_forwards] backdroxp:bg-black/50 border-none outline-none text-white max-w-md w-full m-auto">
                <h1 className="editTitleText text-white text-xl font-bold text-center mb-4 bg-transparent">Edit thought</h1>
                <form className="editThoughtForm bg-transparent flex flex-col gap-2" onSubmit={handleSubmit(submitHandler)}>
                    <div className="editInputContainer bg-[#2e4285] flex flex-col pb-1.5">
                        <label className="editFormLabel text-slate-100 bg-transparent text-sm mb-1">Name of the thought</label>
                        <input {...register("name")} type="text" className="text-white rounded-[20px] border border-black p-1.5 outline-none focus:border-orange-500 bg-transparent transition-colors"/>
                        {errors.name && (
                            <span className="text-red-500 text-xs mt-1">
                                    {errors.name.message}
                             </span>
                        )}
                    </div>
                    <div className="editInputContainer bg-[#2e4285] flex flex-col pb-1.5">
                        <label className="editFormLabel text-slate-100 bg-transparent text-sm mb-1">The due date of the task</label>
                        <input {...register("dateDue",{valueAsDate: true})} type="date" className="text-white rounded-[20px] border border-black p-1.5 outline-none focus:border-orange-500 bg-transparent transition-colors"/>
                        {errors.dateDue && (
                            <span className="text-red-500 text-xs mt-1">
                                    {errors.dateDue.message}
                             </span>
                        )}
                    </div>
                    <div className="editInputContainer bg-[#2e4285] flex flex-col pb-1.5">
                        <label className="editFormLabel text-slate-100 bg-transparent text-sm mb-1">Short description of the task</label>
                        <input {...register("description")} type="text" className="text-white rounded-[20px] border border-black p-1.5 outline-none focus:border-orange-500 bg-transparent transition-colors"/>
                        {errors.description && (
                            <span className="text-red-500 text-xs mt-1">
                                    {errors.description.message}
                             </span>
                        )}
                    </div>
                    <div className="editButtonContainer bg-transparent grid grid-cols-2 gap-1.5 pt-4">
                        <button className="closeEdit rounded-[20px] border-none text-white bg-[#8b0000] hover:bg-red-600 py-1.5 px-4 cursor-pointer transition-colors duration-300" onClick={prop.handleEditing}>Close</button>
                        <button className="editButton rounded-[20px] border-none text-white bg-[#ff8c00] hover:bg-orange-500 py-1.5 px-4 cursor-pointer transition-colors duration-300"
                                type={"submit"} disabled={isSubmitting}>{isSubmitting?"Submitting...":"Edit"}</button>
                    </div>
                </form>
            </dialog>
        </div>
    )
}
