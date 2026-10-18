import "../css/SingleThoughtCSS.css"
import type {ThoughtType} from "../types/ThoughtType.ts";

export default function SingleThought(prop:{thought:ThoughtType}){

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

    return (
        <div id={"background"}>
            <h2 id={"FormTitle"}>{prop.thought.name}</h2>
            <div className={"ThoughtDetails"}>
                <div className={"dateTexts"}>
                    <p className={"detailText"}>{prop.thought.dateOfCreation.toString()}</p>
                    <p className={"detailText"}>{prop.thought.dateDue.toString()}</p>
                </div>
                <p className={"detailText"}>{prop.thought.description}</p>
                <p className={progressionColour(prop.thought.stateOfProgress)}>{prop.thought.stateOfProgress}</p>
            </div>
        </div>
    )
}