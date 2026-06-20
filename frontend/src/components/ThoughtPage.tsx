import {useEffect} from "react";
import {isAlive} from "../services/ThoughtService.ts";
import {toast} from "react-toastify";

export default function ThoughtPage() {
    useEffect(() => {
        isAlive()
        toast.success("siker")

    }, []);
    return (
        <>
            <h1>Szia Laci</h1>
        </>
    )
}