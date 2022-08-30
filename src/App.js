import React, { useEffect } from 'react';
import './App.scss';
import Footer from './components/footer';
import Header from './components/header';
import { getItems } from './services/API';
import { setCompanies, setItems, setTags } from './storage/redux/items/action';

function App() {
  useEffect(() => {
     getItems()
       .then((resp) => setItems(resp.data))
       .then(() => {
         setTags();
         setCompanies();
       })
       .catch((err) => {
         throw err;
       });
  },[])
 

  return (
    <div className="App">
      <Header />
      <Footer/>
   
    </div>
  );
}

export default App;
