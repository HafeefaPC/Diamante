import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CreateAccount from './CreateAccount';
import Payments from './Payments';
import ManageData from './ManageData';


function Home() {
  return (
    <div className=" flex flex-col justify-center items-center p-24 ">
      <h1 className='text-4xl font-bold' >Diamante Task</h1>
      <section className=' flex flex-col gap-7 p-10 text-2xl '>
        <Link to="/create-account">
          <button className='border border-white p-4 rounded-lg'>Create Account</button>
        </Link>
        <Link to="/payments">
          <button  className='border border-white p-4 rounded-lg'>Payments</button>
        </Link>
        <Link to="/manage-data">
          <button  className='border border-white p-4 rounded-lg'>Manage Data</button>
        </Link>
      
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/manage-data" element={<ManageData />} />
      
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
