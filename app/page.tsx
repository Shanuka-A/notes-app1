import { getAllNotes } from "@/api";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

export default async function Home() {
  const tasks = await getAllNotes();
  console.log(tasks);

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-7 flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Notes Manager</h1>
        <h2>Manage your daily NOTES</h2>
         <AddNote/>
      </div>
      <NoteList tasks={tasks}/>
    </main>
  );
}
