import {useEffect} from "react";
import {isAlive} from "../services/ThoughtService.ts";
import {toast} from "react-toastify";
import "../css/ThoughtPageCSS.css";
import SingleThought from "./SingleThought.tsx";

export default function ThoughtPage() {
    useEffect(() => {
        isAlive()
        toast.success("siker")

    }, []);
    return (
        <>
            <h1>Thought Page</h1>
            <div>
                <SingleThought/>
            </div>
        </>
    )
}