import "../css/SingleThoughtCSS.css"
import type {ThoughtType} from "../types/ThoughtType.ts";

export default function SingleThought(prop:{thought:ThoughtType}){
    return (
        <div id={"background"}>
            <h2 id={"FormTitle"}>{prop.thought.name}</h2>
            <div className={"ThoughtDetails"}>
                <p className={"detailText"}>{prop.thought.date.toString()}</p>
                <p className={"detailText"}>{prop.thought.description}</p>
            </div>
        </div>
    )
}