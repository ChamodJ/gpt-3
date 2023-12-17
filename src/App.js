import React from 'react'


import {Footer, Blog, Possibility, Feature, WhatGPT3, Header} from './containers';
import {Brand, Cta, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar></Navbar>
        <Header></Header>
      </div>
        <Brand></Brand>
        <WhatGPT3></WhatGPT3>
        <Feature></Feature>
        <Possibility></Possibility>
        <Cta></Cta>
        <Blog></Blog>
        <Footer></Footer>
    </div>
  )
}

export default App