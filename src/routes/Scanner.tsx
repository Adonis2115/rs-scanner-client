import { Button, Input } from "@nextui-org/react";
import { ReactNode, useState } from "react";
import indexs from '../../index.json';
import Navbar from "../components/Navbar";
import ScannerResult from "../components/ScannerResult";
import SelectComponent from "../components/Select";
import SelectionAutocomplete from "../components/SelectionAutocomplete";

const filterList = [{ label: "Bullish", value: "bullish" }, { label: "Bearish", value: "bearish" }, { label: "Cross Over", value: "crossover" }, { label: "Cross Under", value: "crossunder" }]

function Scanner() {
    const [index, setIndex] = useState<number | null>(null)
    const [ma, setMa] = useState<string>("20")
    const [streak, setStreak] = useState<string>("0")
    const [scannerResultComponent, setScannerResultComponent] = useState<ReactNode>(null)
    const [filter, setFilter] = useState<string | null>(null)
    const fetchData = () => {
        setScannerResultComponent(<ScannerResult url={`${import.meta.env.VITE_BASE_URL}/rs/${filter}?ma=${ma}&index=${index}&streak=${filter === "bullish" || filter === "bearish" ? streak : 0}`} />)
    }
    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-16 mr-16 ml-16 mt-16">
                <div className='flex gap-8 justify-center'>
                    <SelectionAutocomplete data={indexs} selectData='index' setData={setIndex} />
                    <Input size="sm" type="input" label="MA Length RS" value={ma} onValueChange={setMa} />
                    <SelectComponent filterList={filterList} setFilter={setFilter} />
                    <Input isDisabled={filter === "bullish" || filter === "bearish" ? false : true} size="sm" type="input" label="No. of Streak" value={streak} onValueChange={setStreak} />
                    <Button radius="sm" size="lg" color="primary" onClick={fetchData}>Scan</Button>
                </div>
                {scannerResultComponent}
            </div >
        </>
    )
}

export default Scanner
