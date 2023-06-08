// import { useState, useEffect } from 'react'

import './style/app.sass';
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {

  return (
    <div className="App">
      <Navbar />
      <section>
        <Form />
      </section>
    </div>
  )
}

export default App
