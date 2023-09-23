
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GoogleAuth from './components/GoogleAuth';
import HomePage from './components/HomePage';
import CreateForm from './components/CreateForm';

function App() {
  return (
    <div className="App">
      <Routes>
     <Route path="/"  element={<GoogleAuth/>}/>
     <Route path="/home" element={<HomePage/>}/>
     <Route path="/new-form" element={<CreateForm/>}/>
     </Routes>
    </div>
  );
}

export default App;
