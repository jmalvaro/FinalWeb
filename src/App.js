import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import Header from './Componentes/Header';
import HeroSection from './Componentes/HeroSection';
import CardSection from './Componentes/CardSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CardSection />
    </div>
  );
}

export default App;
