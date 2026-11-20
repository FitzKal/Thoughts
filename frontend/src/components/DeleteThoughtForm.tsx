import {useRef} from "react";

export default function DeleteThoughtForm(prop:{isDeleting:boolean, handleDeleting:()=>void}){

    const dialogRef = useRef<HTMLDialogElement>(null)

    return(
        <div>
            <dialog className={"m-auto"}>
                <button></button>
            </dialog>
        </div>
    )
}