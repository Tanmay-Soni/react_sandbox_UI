import { useState, useEffect } from "react";


export function Textbox(){
    const[num, setNum] = useState(0)

    function handleEvent(){
        setNum(num + 1)
        console.log("The number just got incremented by 1")
    }

    useEffect(() => {
        console.log(num)
    }, [num])

    return (
        <>
            <button onClick={() => handleEvent()} style={{backgroundColor: "Red"}}>
                {num}
            </button>
        </>
    )
}