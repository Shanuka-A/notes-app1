import { ITask } from "@/types/tasks";
import Task from "./Task";


interface NoteListProps{
  tasks: ITask[]
}

const NoteList: React.FC<NoteListProps>=({tasks})=> {
  return <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Topic</th>
        <th>Your Note</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task)=>(
        <Task key={task.id} task={task}/>
       ))}
    </tbody>
  </table>
</div> 

};

export default NoteList