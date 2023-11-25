import { Button, Input } from "@nextui-org/react";
import { ReactNode, useState } from "react";
import indexs from '../../index.json';
import Navbar from "../components/Navbar";
import ScannerResult from "../components/ScannerResult";
import SelectionAutocomplete from "../components/SelectionAutocomplete";

function Scanner() {
    const [index, setIndex] = useState<number | null>(null)
    const [ma, setMa] = useState<string>("20")
    const [stockDetailsComponent, setStockDetailsComponent] = useState<ReactNode>(null)
    const fetchData = () => {
        setStockDetailsComponent(<ScannerResult url={`${import.meta.env.VITE_BASE_URL}/rs?ma=${ma}&index=${index}`} />)
    }
    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-16 mr-16 ml-16 mt-16">
                <div className='flex gap-8 justify-center'>
                    <SelectionAutocomplete data={indexs} selectData='index' setData={setIndex} />
                    <Input size="sm" type="input" label="MA Length RS" value={ma} onValueChange={setMa} />
                    <Button radius="sm" size="lg" color="primary" onClick={fetchData}>Get Details</Button>
                </div>
                {stockDetailsComponent}
            </div >
        </>
    )
}

export default Scanner
