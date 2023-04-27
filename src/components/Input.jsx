import { useState } from "react"

const Input =(props)=>{

    const [{props.data}, {props.setData}]= useState("")

    const handleDataChange= (event)=>{
       props.setData(event.target.value)

    }
    return(
        <div className="input-box">
        <h2>{props.title}</h2>
        <input placeholder={props.placeholder} type={props.text} name={props.data} onChange={handleDataChange} className="input"/>


</div>
    )
}

export default Input