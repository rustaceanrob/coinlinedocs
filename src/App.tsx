import { useEffect } from 'react';
import './App.css'
import Header from './components/Header'
import {
  Route, Routes,
} from "react-router-dom";
import Home from './components/pages/Home';
import Installation from './components/pages/Installation';
import Setup from './components/pages/Setup';
import Usage from './components/pages/Usage';
import Send from './components/pages/Sending';

function App() {

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, [])

  return (
    <div className='flex flex-col justify-start items-center w-full h-screen dark:bg-gradient-to-t from-black to-zinc-950'>
      <Header github='https://github.com/xorizon/coinline' npm='https://www.npmjs.com/package/coinline_cli'/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/installation'} element={<Installation/>}/>
        <Route path={'/setup'} element={<Setup/>}/>
        <Route path={'/usage'} element={<Usage/>}/>
        <Route path={'/send'} element={<Send/>}/>
      </Routes>
    </div>
  )
}

export default App
