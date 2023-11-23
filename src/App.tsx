import index from './../index.json';
import stocks from './../stocks.json';
import Navbar from "./components/Navbar";
import SelectionAutocomplete from "./components/SelectionAutocomplete";

function App() {
  return (
    <>
      <Navbar />
      <SelectionAutocomplete data={stocks} selectData='stock' />
      <SelectionAutocomplete data={index} selectData='index' />
    </>
  )
}

export default App
