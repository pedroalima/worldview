import './style/app.sass';
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Countries from './components/Countries';

function App() {

  // function countryFilter(country){
  //   setCountries(country)
  // }

  return (
    <div className="App">
      <Navbar />
      <Form />
      <Countries />
    </div>
  )
}

export default App
