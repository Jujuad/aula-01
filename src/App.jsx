
export default function App() {

  var nome = "Cássio";

  const time = [
    "Sao paulo",
    "Corinthians",
    "Santos",
    "Palmeiras"
  ]

  return (
    <div>
      <h1>React + Vite</h1>

      <h2>RM552332</h2>

        <p>Pior goleiro: {nome}</p>

      <ul>
        {time.map((item,key) =>
        <li key={key}>{key}</li>)}
      </ul>
    </div>
  )
}





// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React Coded By rm552332</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
