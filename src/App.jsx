import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Items from './components/Items';
import { ToastContainer, toast } from 'react-toastify';



const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}


function App() {
  
  const [items, setItems] = useState( JSON.parse(localStorage.getItem('list')) || [] )

  const getItem = (item) =>{
   const newItems = [...items, item]
   setItems(newItems)
   setLocalStorage(newItems)
  }

const removeItem = (id) =>{
  const newArray = items.filter(item => item.id != id)
  setItems(newArray)
  setLocalStorage(newArray)
  toast.success("Item has been deleted!")
}

  return (
    <main className='section-center'>
      <Form getItem={getItem} />
      <Items items={items} removeItem={removeItem}/>
      <ToastContainer position='top-right'/>
    </main>
  )
}

export default App
