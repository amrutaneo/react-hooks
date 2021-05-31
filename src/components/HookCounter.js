import React, {useState,useContext} from "react";
import { userContext } from "../App"
import useDocumentTitle from "../hooks/UseDocumentTitle";

function HookCounter () {
    const [count, setCount] = useState(0)
    const user = useContext(userContext)
    useDocumentTitle(count)
    return (
    <div>
        Welcome {user}
        <br/>
        <button onClick={()=>setCount(count + 1)}>Count {count}</button>
    </div>    
    )
}

export default HookCounter;