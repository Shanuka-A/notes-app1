import {AiOutlinePlus} from 'react-icons/ai'

const AddNote = () => {
  return (
    <div>
       <button className="btn btn-primary w-full">Add New Note
       <AiOutlinePlus className='ml-2' size={18}/></button> 
    </div>
  )
}

export default AddNote