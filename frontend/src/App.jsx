import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css'
import './bootstrap.min.css'
import AboutPage from './components/AboutPage';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
