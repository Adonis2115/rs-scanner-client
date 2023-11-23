import { Button, Input } from "@nextui-org/react";
import index from './../index.json';
import stocks from './../stocks.json';
import Navbar from "./components/Navbar";
import SelectionAutocomplete from "./components/SelectionAutocomplete";

function App() {
  return (
    <>
      <Navbar />
      <div className='flex gap-8 justify-center mr-16 ml-16 mt-16'>
        <SelectionAutocomplete data={stocks} selectData='stock' />
        <SelectionAutocomplete data={index} selectData='index' />
        <Input size="sm" type="input" label="MA Length RS" />
        <Button radius="sm" size="lg" color="primary">Get Details</Button>
      </div>
    </>
  )
}

export default App
