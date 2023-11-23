import { Button, Input } from "@nextui-org/react";
import index from '../../index.json';
import stocks from '../../stocks.json';
import Navbar from "../components/Navbar";
import SelectionAutocomplete from "../components/SelectionAutocomplete";
import StockDetails from "../components/StockDetails";

function AnalyzeStock() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-16 mr-16 ml-16 mt-16">
                <div className='flex gap-8 justify-center'>
                    <SelectionAutocomplete data={stocks} selectData='stock' />
                    <SelectionAutocomplete data={index} selectData='index' />
                    <Input size="sm" type="input" label="MA Length RS" />
                    <Button radius="sm" size="lg" color="primary">Get Details</Button>
                </div>
                <StockDetails />
            </div >
        </>
    )
}

export default AnalyzeStock
