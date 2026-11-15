import {useForm} from "react-hook-form";
import {useQueryClient} from "@tanstack/react-query";
import type {ThoughtType} from "../types/ThoughtType.ts";
import {useEffect} from "react";

export default function EditThoughtForm(prop:{handleEditing: () => void, thoughtDetail:ThoughtType, isEditing:boolean }){
    const {register,handleSubmit, formState:{errors,isSubmitting}} = useForm<ThoughtType>({
        defaultValues:{
            dateDue: prop.thoughtDetail.dateDue,
            description:prop.thoughtDetail.description,
            name: prop.thoughtDetail.name,
            stateOfProgress: prop.thoughtDetail.stateOfProgress
        }
    })
    const queryClient = useQueryClient();

    useEffect(() =>{
        const dialog = document.getElementById("editDialog") as HTMLDialogElement
        if (prop.isEditing)
            dialog.showModal()
        else
            dialog.close()
    },[prop.isEditing])

    return (
        <div>
            <dialog id="editDialog" className="bg-[#2e4285] rounded-[20px] p-4 animate-[pop-in_0.3s_forwards] backdrop:bg-black/50 border-none outline-none text-white max-w-md w-full">
                <h1 className="editTitleText text-white text-xl font-bold text-center mb-4 bg-transparent">Edit thought</h1>
                <form className="editThoughtForm bg-transparent flex flex-col gap-2">
                    <div className="editInputContainer bg-[#2e4285] flex flex-col pb-1.5">
                        <label className="editFormLabel text-slate-100 bg-transparent text-sm mb-1">Name of the thought</label>
                        <input {...register("name")} type="text" className="text-white rounded-[20px] border border-black p-1.5 outline-none focus:border-orange-500 bg-transparent transition-colors"/></div>
                    <div className="editInputContainer bg-[#2e4285] flex flex-col pb-1.5">
                        <label className="editFormLabel text-slate-100 bg-transparent text-sm mb-1">Date of the beginning of the task</label>
                        <input {...register("dateOfCreation")} type="date" className="text-white rounded-[20px] border border-black p-1.5 outline-none focus:border-orange-500 bg-transparent transition-colors"/></div>
                    <div className="editInputContainer bg-[#2e4285] flex flex-col pb-1.5">
                        <label className="editFormLabel text-slate-100 bg-transparent text-sm mb-1">The due date of the task</label>
                        <input {...register("dateDue")} type="date" className="text-white rounded-[20px] border border-black p-1.5 outline-none focus:border-orange-500 bg-transparent transition-colors"/></div>
                    <div className="editInputContainer bg-[#2e4285] flex flex-col pb-1.5">
                        <label className="editFormLabel text-slate-100 bg-transparent text-sm mb-1">Short description of the task</label>
                        <input {...register("description")} type="text" className="text-white rounded-[20px] border border-black p-1.5 outline-none focus:border-orange-500 bg-transparent transition-colors"/></div>
                </form>
                <div className="editButtonContainer bg-transparent grid grid-cols-2 gap-1.5 pt-4">
                    <button className="closeEdit rounded-[20px] border-none text-white bg-[#8b0000] hover:bg-red-600 py-1.5 px-4 cursor-pointer transition-colors duration-300" onClick={prop.handleEditing}>Close</button>
                    <button className="editButton rounded-[20px] border-none text-white bg-[#ff8c00] hover:bg-orange-500 py-1.5 px-4 cursor-pointer transition-colors duration-300" onClick={prop.handleEditing}>Submit</button>
                </div>
            </dialog>
        </div>
    )
}
