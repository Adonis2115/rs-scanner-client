import { Button, Input } from "@nextui-org/react";
import { ReactNode, useState } from "react";
import { useRecoilValue } from "recoil";
import filterList from '../../selections/filters.json';
import frequencyList from '../../selections/frequency.json';
import Navbar from "../components/Navbar";
import ScannerResult from "../components/ScannerResult";
import SelectFilter from "../components/SelectFilter";
import SelectFrequency from "../components/SelectFrequency";
import SelectionAutocomplete from "../components/SelectionAutocomplete";
import SkeletonLoad from "../components/Skeleton";
import { indexListState } from "../store/stockListState";

function Scanner() {
    const indexList = useRecoilValue(indexListState)
    const [index, setIndex] = useState<number | null>(1) // ! default index which is at id 1 in stocks
    const [ma, setMa] = useState<string>("20")
    const [streak, setStreak] = useState<string>("0")
    const [scannerResultComponent, setScannerResultComponent] = useState<ReactNode>(null)
    const [filter, setFilter] = useState<string | null>(null)
    const [frequency, setFrequency] = useState<string | null>(null)
    const fetchData = () => {
        setScannerResultComponent(<ScannerResult url={`${import.meta.env.VITE_BASE_URL}/rs/${filter}?isDaily=${frequency === "daily" ? true : false}&ma=${ma}&index=${index}&streak=${filter === "bullish" || filter === "bearish" ? streak : 0}`} />)
    }
    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-16 mr-16 ml-16 mt-16">
                <div className='flex gap-8 justify-center'>
                    {indexList.length ? <SelectionAutocomplete data={indexList} selectData='index' setData={setIndex} defaultKey={indexList[0].ID} /> : <SkeletonLoad />}
                    <Input size="sm" type="input" label="MA Length RS" value={ma} onValueChange={setMa} />
                    <SelectFilter filterList={filterList} setFilter={setFilter} />
                    <SelectFrequency frequencyList={frequencyList} setFrequency={setFrequency} />
                    <Input isDisabled={filter === "bullish" || filter === "bearish" ? false : true} size="sm" type="input" label="No. of Streak" value={streak} onValueChange={setStreak} />
                    <Button radius="sm" size="lg" color="primary" onClick={fetchData}>Scan</Button>
                </div>
                {scannerResultComponent}
            </div >
        </>
    )
}

export default Scanner
