import { toast } from 'react-toastify';
import {v4 as uuidv4} from 'uuid'

const Form = ({getItem}) => {

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(e.target[0].value == ""){
            toast.error("Your form is blank")
        } else {
          getItem(
            {item: e.target[0].value,
            completed: false,
            id: uuidv4()
            }) 
            toast.success("Item has been added!")
            e.target[0].value = ""
        }
       
    }

  return (
    <form onSubmit={handleSubmit}>
        <h4>To-do List</h4>

        <div className="form-control">
          <input className='form-input' type="text" />
          <button className="btn" type="submit">Submit</button>
        </div>
        
    </form>
  )
}

export default Form