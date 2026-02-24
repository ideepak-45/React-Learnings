import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const passwordDisplayRef = useRef(null); // ref to DOM element showing the password

  const passwordGenerator = useCallback(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" + (numbersAllowed ? "0123456789" : "") + (symbolsAllowed ? "!@#$%^&*()_+" : "");
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setGeneratedPassword(password);
  }, [length, numbersAllowed, symbolsAllowed], setGeneratedPassword);

  const copyPasswordToClipboard = (password) => {
    window.navigator.clipboard.writeText(password);
    passwordDisplayRef.current?.select(); // select the password text for visual feedback
  };


  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, symbolsAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-8 my-8 text-orange-500 bg-gradient-to-br from-gray-800 to-gray-900'>
        <h1 className='text-4xl font-bold mb-6 text-center bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent'>Password Generator</h1>
        
        <div className='mb-6'>
          <label className='block mb-3 text-sm font-semibold'>Password Length: <span className='text-orange-400'>{length}</span></label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500'
          />
        </div>

        <div className='mb-6 space-y-3'>
          <label className='flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer transition'>
            <input
              type="checkbox"
              checked={numbersAllowed}
              onChange={(e) => setNumbersAllowed(e.target.checked)}
              className='w-4 h-4 mr-3 accent-orange-500 cursor-pointer'
            />
            <span className='font-medium'>Include Numbers</span>
          </label>
          <label className='flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer transition'>
            <input
              type="checkbox"
              checked={symbolsAllowed}
              onChange={(e) => setSymbolsAllowed(e.target.checked)}
              className='w-4 h-4 mr-3 accent-orange-500 cursor-pointer'
            />
            <span className='font-medium'>Include Symbols</span>
          </label>
        </div>

        <button
          onClick={passwordGenerator}
          className='w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105'
        >
          Generate Password
        </button>

        {generatedPassword && (
          <div className='mt-6 flex gap-3'>
            <div className='flex-1 p-4 bg-gray-950 rounded-lg border border-orange-500/30'>
              <input
                ref={passwordDisplayRef}
                type="text"
                value={generatedPassword}
                readOnly
                className='w-full bg-transparent outline-none text-lg font-mono text-orange-300'
              />
            </div>
            <button
              onClick={() => {
                copyPasswordToClipboard(generatedPassword);
              }}
              className='bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105'
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default App
