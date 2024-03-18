import { getAllNotes } from "@/api";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

export default async function Home() {
  const tasks = await getAllNotes();
  console.log(tasks);

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Notes App</h1>
         <AddNote/>
      </div>
      <NoteList tasks={tasks}/>
    </main>
  );
}
