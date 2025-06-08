import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import Header from './Componentes/Header';
import HeroSection from './Componentes/HeroSection';
import CardSection from './Componentes/CardSection';
import ThirdSection from './Componentes/ThirdSection';
import Quarter from './Componentes/Quarter';
import FinalCall from './Componentes/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CardSection />
      <ThirdSection />
      <Quarter />
      <FinalCall />
    </div>
  );
}

export default App;
