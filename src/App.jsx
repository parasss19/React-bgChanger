import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
    {/* screen */}
      <div className="w-full h-screen" style={{backgroundColor: color}}>
   
         {/* container of colors */}
           <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
          {/* color bar */}
            <div className="flex flex-wrap gap-3 shadow-xl rounded-2xl px-3 py-2 bg-orange-200">
              {/*buttons  */}
              <button onClick ={()=>{setColor(`red`)}} className="outline-none text-white rounded-xl shadow-xl px-3 py-2"
               style={{backgroundColor: "red"}}>
                Red
              </button>
              <button onClick ={()=>{setColor(`green`)}} className="outline-none text-white rounded-xl shadow-xl px-3 py-2"
               style={{backgroundColor: "green"}}>
                Green
              </button>
              <button onClick ={()=>{setColor(`blue`)}} className="outline-none text-white rounded-xl shadow-xl px-3 py-2"
               style={{backgroundColor: "blue"}}>
                Blue
              </button>
              <button onClick ={()=>{setColor(`pink`)}} className="outline-none text-white rounded-xl shadow-xl px-3 py-2"
               style={{backgroundColor: "pink"}}>
                Pink
              </button>
              <button onClick ={()=>{setColor(`orange`)}} className="outline-none text-white rounded-xl shadow-xl px-3 py-2"
               style={{backgroundColor: "orange"}}>
                Orange
              </button>
              <button onClick ={()=>{setColor(`black`)}} className="outline-none text-white rounded-xl shadow-xl px-3 py-2"
               style={{backgroundColor: "black"}}>
                Black
              </button>
              <button onClick ={()=>{setColor(`purple`)}} className="outline-none text-white rounded-xl shadow-xl px-3 py-2"
               style={{backgroundColor: "purple"}}>
                Purple
              </button>
          </div>

      </div>
    </div>
    </>
  )
}

export default App
