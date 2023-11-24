import React,{useState} from "react";
import Profile from "./card";
const Contact = () => {
    const [number, setNumber] = useState(0)
    return(
        <div>
            <h1>Contact</h1>

            <div className="text-3xl flex justify-between">
                <div>{number}</div>  
                <div onClick={()=> setNumber(number+1)} className="cursor-pointer ">+</div>
                <div onClick={()=> setNumber(number-1)} className="cursor-pointer">-</div>
                <Profile n={number}/>
            </div>
        </div>
    )
}

export default Contact