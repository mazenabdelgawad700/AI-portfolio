
import './App.css'
// eslint-disable-next-line no-unused-vars
import { MyNav, CTA, Brand} from '../Components/container/index';

// eslint-disable-next-line no-unused-vars
import {Header, Blog, Possiblity, WhatGptIs, Features, Footer} from '../Components/pages/index'

function App() {
  return (
    <div className='App'>
      <div>
        <MyNav />
      </div>
      <div className='container'>
        <Header />
        <Brand />
        <WhatGptIs />
        <Features />
        <Possiblity />
        <CTA />
        <Blog />
      </div>
        <Footer />
    </div>
  )
}

export default App;
