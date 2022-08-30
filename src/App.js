import React from 'react';
import './App.scss';
import Footer from './components/footer';
import Header from './components/header';
import { getItems } from './services/API';

function App() {
 getItems().then(resp=>console.log(resp));

  return (
    <div className="App">
      <Header />
      <Footer/>
   
    </div>
  );
}

export default App;
