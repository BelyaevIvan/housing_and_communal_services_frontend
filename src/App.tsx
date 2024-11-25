// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// src/App.tsx
import './App.css';
import { AppRoutes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./core/store";
import {useEffect} from "react";

import { invoke } from "@tauri-apps/api/core";

function App() {
  useEffect(() => {
    invoke('tauri', {cmd: 'create'})
        .then((response: any) => console.log(response))
        .catch((error: any) => console.log(error));
    return () => {
        invoke('tauri', {cmd: 'close'})
            .then((response: any) => console.log(response))
            .catch((error: any) => console.log(error));
      }
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
      <AppRoutes />
      </Provider>

    </BrowserRouter>
  )
}

export default App;
