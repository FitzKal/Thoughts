
//IsAlive
export const isAlive  = async () =>{
    const res = await fetch("/api/thoughts/isAlive",{
        method: "GET",
    })
    if (res.ok){
        const result = await res.text();
        console.log(result);
    }else {
        const result = await res.json();
        console.log(result);
    }
}