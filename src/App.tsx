import { Mail, Library, File, DoorOpen } from "lucide-react";

function App() {
  return (
    <main className="min-h-screen bg-sand-1 flex flex-col p-5 ">
      <header className="flex items-center justify-between text-orange-9 font-bold text-xl">
        <div className="flex gap-3  items-center justify-center">
          <Mail size={24} className="text-orange-9" />
          <span>vargory.dev@gmail.com</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex gap-3  items-center justify-center">
            <Library size={24} className="text-orange-9" />
            <span>Projetos</span>
          </div>
          <div className="flex gap-3  items-center justify-center">
            <File size={24} className="text-orange-9" />
            <span>Currículo</span>
          </div>
          <div className="flex gap-3  items-center justify-center">
            <DoorOpen size={24} className="text-orange-9" />
            <span>Extras</span>
          </div>
        </div>
      </header>

      <div className="relative h-44">
        <div className="flex items-center justify-center border-4 border-orange-9 px-5 py-3 absolute bottom-0">
          <span className="text-orange-9 font-bold text-4xl">
            個人ウェブサイト
          </span>
        </div>
        <div className="absolute top-0 left-[284px]">
          <div className="p-1 border border-red-9">
            <span className="text-orange-9 text-3xl font-bold">活動まで</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="396"
            height="169"
            viewBox="0 0 396 169"
            fill="none"
            className="absolute top-0"
          >
            <path
              d="M144.003 22.5304L144.584 23.5122H145.724H394V166.947H68.5V87.9473V85.9473H66.5H33.25H2V57.8183V40.9472V2H131.859L144.003 22.5304Z"
              stroke="#F76B15"
              stroke-width="4"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}

export default App;
