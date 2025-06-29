import { useState } from "react"
import { StoreItem } from "../components/StoreItem"
import { Button } from "../components/Button"

export function Page3(){
    const[showItem, setShowItem] = useState(false)

    const item1 = {title: "Bat", desc: "Cricket Bat", price: 50}

    return (
        <>
        <Button show={showItem} setShow={setShowItem}/>
        {showItem && <StoreItem item={item1} />}
        </>
    )
}