import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Form from './Form';
import FinalForm from './FinalForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
            <Route path='/' element= {<Form/>}/>
            <Route path='/final' element = {<FinalForm/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
