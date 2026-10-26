import {useForm} from "react-hook-form";
import {useQueryClient} from "@tanstack/react-query";
import type {ThoughtType} from "../types/ThoughtType.ts";

export default function EditThoughtForm(prop:{handleEditing: () => void, thoughtDetail:ThoughtType }){
    const {register,handleSubmit, formState:{errors,isSubmitting}} = useForm<ThoughtType>({
        defaultValues:{
            dateDue: prop.thoughtDetail.dateDue,
            description:prop.thoughtDetail.description,
            name: prop.thoughtDetail.name,
            stateOfProgress: prop.thoughtDetail.stateOfProgress
        }
    })
    const queryClient = useQueryClient();

    return (
        <div>
            <dialog id="editDialog">
                <h1 className="editTitleText">Edit thought</h1>
                <form className="editThoughtForm">
                    <div className="editInputContainer">
                        <label htmlFor="" className="editFormLabel"></label>
                        <input type="text"/></div>
                    <div className="editInputContainer">
                        <label htmlFor="" className="editFormLabel"></label>
                        <input type="text"/></div>
                    <div className="editInputContainer">
                        <label htmlFor="" className="editFormLabel"></label><
                        input type="text"/></div>
                    <div className="editInputContainer">
                        <label htmlFor="" className="editFormLabel"></label>
                        <input type="text"/></div>
                    <div className="editInputContainer">
                        <label htmlFor="" className="editFormLabel"></label>
                        <input type="text"/></div>
                    <div className="editInputContainer">
                        <label htmlFor="" className="editFormLabel"></label>
                        <input type="text"/></div>
                </form>
            </dialog>
        </div>
    )
}