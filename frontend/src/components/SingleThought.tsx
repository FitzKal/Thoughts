import "../css/SingleThoughtCSS.css"
import type {ThoughtType} from "../types/ThoughtType.ts";
import {useState} from "react";
import EditThoughtForm from "./EditThoughtForm.tsx";

export default function SingleThought(prop:{thought:ThoughtType}){
    const[isEditing, setIsEditing] = useState(false);

    const progressionColour = (progress:string)=>{
        switch (progress){
            case "DONE":
                return "green";
            case "EXPIRED" :
                return "red";
            default:
                return "yellow";
        }
    }

    const handleEditing = () => {
        setIsEditing(!isEditing);
    }

    return (
        <div id={"background"}>
            <div className="actionButtonContainer">
                <button className="editThoughtButton" onClick={handleEditing}>Edit</button>
                <button className="deleteThoughtButton">X</button>
            </div>
            <div className="editFormContainer">
                {
                    isEditing?<EditThoughtForm handleEditing={handleEditing} thoughtDetail={prop.thought}/>:<></>
                }
            </div>
            <h2 id={"FormTitle"}>{prop.thought.name}</h2>
            <div className={"ThoughtDetails"}>
                <div className={"dateTexts"}>
                    <div className="dateContainer">
                        <label htmlFor={"DateOfCreation"} className={"dateDisplayLabel"}>Date Of creation</label>
                        <p className={"detailText"} id={"DateOfCreation"}>{prop.thought.dateOfCreation.toString()}</p>
                    </div>
                    <div className="dateContainer">
                        <label htmlFor={"DateDue"} className={"dateDisplayLabel"}>Date Due</label>
                        <p className={"detailText"} id={"DateDue"}>{prop.thought.dateDue.toString()}</p>
                    </div>
            </div>
                <p className={"detailText"}>{prop.thought.description}</p>
                <p className={progressionColour(prop.thought.stateOfProgress)}>{prop.thought.stateOfProgress}</p>
            </div>
        </div>
    )
}