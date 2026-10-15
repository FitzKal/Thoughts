import {useForm} from "react-hook-form";
import type {thoughtCreationType} from "../types/FormTypes.ts";
import {type Dispatch, type SetStateAction, useEffect} from "react";

export default function ThoughtCreationForm(prop:{isCreating:boolean, setIsCreating:() => void}){
    const {handleSubmit, register, formState:{errors,isSubmitting}} = useForm<thoughtCreationType>()
    useEffect(() => {
        const dialog = document.getElementById("creationDialogue") as HTMLDialogElement;
        if (prop.isCreating){
            dialog.showModal();
        }
        else
            dialog.close();
    }, [prop.isCreating]);

    return (
        <div className="createFromContainer">
            <dialog id = "creationDialogue">›
                <h1>Create a thought!</h1>
                <button onClick={prop.setIsCreating}>Close</button>
            </dialog>
        </div>
    )
}