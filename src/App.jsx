import './App.css'
import Astroid from './Astroid';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:astroidId" element={<Astroid />} />
      </Routes>
    </div>
  )
}

export default App
