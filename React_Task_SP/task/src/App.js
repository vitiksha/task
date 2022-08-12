import './App.css';
import SignIn from './component/SignIn';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DisplayData from './component/DisplayData';
import Registration from './component/Registration';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignIn/>}></Route>
        <Route exact path="/signin" element={<SignIn/>}></Route>
        <Route path='/displaydata' element={<DisplayData/>}></Route>
        <Route exact path="/registration" element={<Registration/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
  }

export default App;
