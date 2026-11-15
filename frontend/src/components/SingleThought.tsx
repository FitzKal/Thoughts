import type {ThoughtType} from "../types/ThoughtType.ts";
import {useState} from "react";
import EditThoughtForm from "./EditThoughtForm.tsx";

export default function SingleThought(prop:{thought:ThoughtType}){
    const[isEditing, setIsEditing] = useState(false);

    const progressionColour = (progress:string)=>{
        switch (progress){
            case "DONE":
                return "text-green-500 text-center bg-transparent";
            case "EXPIRED" :
                return "text-red-500 text-center bg-transparent";
            default:
                return "text-yellow-400 text-center bg-transparent";
        }
    }

    const handleEditing = () => {
        setIsEditing(!isEditing);
    }

    return (
        <div id={"background"} className="border border-black bg-[#121212] flex flex-col items-center flex-wrap w-[40%] min-w-[280px] rounded-[10px] py-4 px-4 hover:scale-105 hover:bg-[#141414] transition-all duration-300">
            <div className="actionButtonContainer bg-transparent flex justify-between w-full px-2 mb-2">
                <button className="editThoughtButton text-white bg-orange-500 hover:bg-[#e6ae43] transition-colors duration-300 rounded-[20px] p-2 cursor-pointer" onClick={handleEditing}>Edit</button>
                <button className="deleteThoughtButton text-white bg-[#8b0000] hover:bg-[#c51b1b] transition-colors duration-300 rounded-[20px] px-3 py-1 cursor-pointer">X</button>
            </div>
            <div className="editFormContainer bg-transparent">
                {
                    isEditing?<EditThoughtForm handleEditing={handleEditing} thoughtDetail={prop.thought}
                    isEditing={isEditing}/>:<></>
                }
            </div>
            <h2 id={"FormTitle"} className="text-white text-xl font-bold my-2 text-center">{prop.thought.name}</h2>
            <div className="ThoughtDetails flex flex-col bg-transparent w-full gap-2">
                <div className="dateTexts bg-transparent grid grid-cols-2 gap-x-6 w-full">
                    <div className="dateContainer bg-transparent flex flex-col">
                        <label htmlFor={"DateOfCreation"} className="dateDisplayLabel bg-transparent text-white text-xs font-semibold uppercase tracking-wider">Date Of creation</label>
                        <p className="detailText bg-transparent text-white text-sm my-0.5" id={"DateOfCreation"}>{prop.thought.dateOfCreation.toString()}</p>
                    </div>
                    <div className="dateContainer bg-transparent flex flex-col">
                        <label htmlFor={"DateDue"} className="dateDisplayLabel bg-transparent text-white text-xs font-semibold uppercase tracking-wider">Date Due</label>
                        <p className="detailText bg-transparent text-white text-sm my-0.5" id={"DateDue"}>{prop.thought.dateDue.toString()}</p>
                    </div>
                </div>
                <p className="detailText bg-transparent text-white text-sm text-center my-1">{prop.thought.description}</p>
                <p className={progressionColour(prop.thought.stateOfProgress)}>{prop.thought.stateOfProgress}</p>
            </div>
        </div>
    )
}
