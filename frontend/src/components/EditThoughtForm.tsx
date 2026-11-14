import {useForm} from "react-hook-form";
import {useQueryClient} from "@tanstack/react-query";
import type {ThoughtType} from "../types/ThoughtType.ts";
import "../css/EditThoughtFormCSS.css";
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
            <dialog id="editDialog">
                <h1 className="editTitleText">Edit thought</h1>
                <form className="editThoughtForm">
                    <div className="editInputContainer">
                        <label className="editFormLabel">Name of the thought</label>
                        <input{...register("name")} type="text"/></div>
                    <div className="editInputContainer">
                        <label className="editFormLabel">Date of the beginning of the task</label>
                        <input {...register("dateOfCreation")} type="date"/></div>
                    <div className="editInputContainer">
                        <label className="editFormLabel">The due date of the task</label>
                        <input {...register("dateDue")} type="date"/></div>
                    <div className="editInputContainer">
                        <label className="editFormLabel">Short description of the task</label>
                        <input {...register("description")} type="text"/></div>
                </form>
                <div className="editButtonContainer">
                    <button className="closeEdit" onClick={prop.handleEditing}>Close</button>
                    <button className="editButton" onClick={prop.handleEditing}>Submit</button>
                </div>
            </dialog>
        </div>
    )
}