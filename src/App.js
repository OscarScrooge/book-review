import React from 'react';
import Header from "./app/components/Header";
import BodyContainer from "./app/containers/BodyContainer";
import './App.css';

function App() {
  return (
    <div className="App">
       <Header/>
       <BodyContainer/>
    </div>
  );
}

export default App;
