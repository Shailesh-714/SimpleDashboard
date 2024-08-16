import React from 'react';
import "./App.css"
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/Orders';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="container">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
