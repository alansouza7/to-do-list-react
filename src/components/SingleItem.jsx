import { useState } from "react"

export const SingleItem = ({removeItem, ...props}) => {

    const {id, completed, item} = props

    const [isChecked, setIsChecked] = useState(completed)

    const toggle = () =>{
        setIsChecked(oldValue => !oldValue)
    }

 
  return (
    <div className="single-item">
       <input
         onChange={toggle} 
         type="checkbox" 
         name="isChecked"
         checked={isChecked}
         />
        <p style={isChecked? {textDecoration: "line-through"}: {}}>{item}</p>
       
         <button className="btn" onClick={() => removeItem(id)}>Remove</button>
    </div>
  )
}
