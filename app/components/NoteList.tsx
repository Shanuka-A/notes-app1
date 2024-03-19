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
        <th className="text-3xl">Your Note</th>
        <th className="text-3xl">Choose</th>
      </tr>
    </thead>
    <tbody className="text-2xl">
      {tasks.map((task)=>(
        <Task key={task.id} task={task}/>
       ))}
    </tbody>
  </table>
</div> 

};

export default NoteList