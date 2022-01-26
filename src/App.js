import { useState } from 'react'
import './App.css';
import Modal from './components/Modal';

function App() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false) 
  return (
    <div className="App">
      <h1>React Modal</h1>
      <button className='button' onClick={handleOpen}>Open Modal</button>

      <Modal open={open} handleClose={handleClose} setOpen={setOpen}/>
    </div>
  );
}

export default App;
