import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <h1 className="flex justify-center bg-white font-bold">Background-color-changer</h1>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
       <button onClick={()=>setColor("red")} className="outline-none px-3" style={{backgroundColor:"red"}}>Red</button>
       <button onClick={()=>setColor("green")} className="outline-none px-3" style={{backgroundColor:"green"}}>Green</button>
       <button onClick={()=>setColor("olive")} className="outline-none px-3" style={{backgroundColor:"olive"}}>Olive</button>
       <button onClick={()=>setColor("pink")} className="outline-none px-3" style={{backgroundColor:"brown"}}>Pink</button>
       <button onClick={()=>setColor("blue")} className="outline-none px-3" style={{backgroundColor:"blue"}}>Blue</button>
       <button onClick={()=>setColor("brown")} className="outline-none px-3" style={{backgroundColor:"brown"}}>Brown</button>

    </div>
    </div>



    </div>
    </>
  )
}

export default App
