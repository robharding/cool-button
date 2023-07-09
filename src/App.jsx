import { Mail } from "lucide-react";

function App() {
  return (
    <main className="flex justify-center mt-16 antialiased">
      <button className="border-sky-400 border border-1 py-2 px-4 rounded-lg flex gap-2 select-none duration-200 shadow-custom hover:shadow-customHover -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0">
        <Mail className="h-4 w-4 m-auto" />
        Newsletter
      </button>
    </main>
  );
}

export default App;
