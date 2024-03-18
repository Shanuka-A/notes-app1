import { ITask } from "./types/tasks";

const baseUrl ='http://localhost:3001';
export const getAllNotes =async() : Promise<ITask[]>=> {
    const res = await fetch(`${baseUrl}/tasks`,{cache: 'no-store' });
    const tasks = await res.json();
    return tasks;

}

export const addNote = async(note:ITask): Promise<ITask>=>{
    const res = await fetch(`${baseUrl}/tasks`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
    const newNote = await res.json();
    return newNote;
}

export const editNote = async(note:ITask): Promise<ITask>=>{
    const res = await fetch(`${baseUrl}/tasks/${note.id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
    const updatedNote = await res.json();
    return updatedNote;
}

export const deleteNote = async(id:string): Promise<void>=>{
    const res = await fetch(`${baseUrl}/tasks/${id}`,{
        method: 'DELETE',
    })
 
}