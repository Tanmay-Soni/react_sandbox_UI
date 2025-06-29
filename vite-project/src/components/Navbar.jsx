import { Link } from "react-router-dom"
import { Button } from "./Button"

export function Navbar(){
    return(
        <>
            <Link to = "/">
                <Button>Home</Button>
            </Link>
            <Link to = "/page1">
                <Button>Page 1</Button>
            </Link>
            <Link to = "/page2">
                <Button>Page 2</Button> 
            </Link>
            <Link to = "/page3">
                <Button>Page 3</Button>
            </Link>
        </>
    )
}