import './App.css';
import Header from './component/header/header';
import Main from './component/main/main';
import Menu from './component/menu/menu';
import Footer from './component/footer/footer';
import React from 'react';

function App() {

  return (
    <div className="App">
      <Header />
      <Menu/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
