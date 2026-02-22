import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('white')

  return (
    <>
      <div className={`w-full h-screen duration-500 bg-${bgColor}`}>
        <h1 className="text-3xl font-bold underline">Background Color Changer</h1>
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setBgColor('blue-500')}
          >
            Blue
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={() => setBgColor('green-500')}
          >
            Green
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={() => setBgColor('red-500')}
          >
            Red
          </button>
        </div>
      </div>
    </>
  )
}

export default App
