"use client"

import { ITask } from "@/types/tasks"
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteNote, editNote } from "@/api";

interface TaskProp {
  task: ITask
}
const Task: React.FC<TaskProp> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text)

  const handleSubmitEditNote: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editNote({
      id: task.id,
      text: taskToEdit
    });
    setTaskToEdit("");
    setOpenModalEdit(false)
    router.refresh();

  };

  const handleDeleteTask=async (id:string)=> {
    await deleteNote(id);
    setOpenModalDelete(false);
    router.refresh
  }

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit onClick={() => setOpenModalEdit(true)} cursor='pointer' className="text-blue-500" size={25} />

        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditNote}>
            <h3 className='font-bold text-lg'> Edit Note</h3>
            <div className='modal-action'>
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button type='submit' className='btn'>Submit</button>
            </div>
          </form>
        </Modal>

        <FiTrash onClick={() => setOpenModalDelete(true)} cursor='pointer' className="text-red-500" size={25} />

        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-lg">Are you sure, you want to delete this Note ?</h3>
          <div className="modal-action">
            <button onClick={()=> handleDeleteTask(task.id)} className="btn">
              yes
            </button>
          </div>
        </Modal>

      </td>
    </tr>
  );
};

export default Task;