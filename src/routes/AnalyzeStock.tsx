import { Button, Input } from "@nextui-org/react";
import { ReactNode, useState } from "react";
import { useRecoilValue } from "recoil";
import frequencyList from '../../selections/frequency.json';
import Navbar from "../components/Navbar";
import SelectFrequency from "../components/SelectFrequency";
import SelectionAutocomplete from "../components/SelectionAutocomplete";
import SkeletonLoad from "../components/Skeleton";
import StockDetails from "../components/StockDetails";
import { indexListState, stockListState } from "../store/stockListState";

function AnalyzeStock() {
    const stockList = useRecoilValue(stockListState)
    const indexList = useRecoilValue(indexListState)
    const [stock, setStock] = useState<number | null>(2) // ! default stock id 2
    const [index, setIndex] = useState<number | null>(1) // ! default index which is at id 1 in stocks
    const [ma, setMa] = useState<string>("20")
    const [stockDetailsComponent, setStockDetailsComponent] = useState<ReactNode>(null)
    const [frequency, setFrequency] = useState<string | null>(null)
    const fetchData = () => {
        setStockDetailsComponent(<StockDetails url={`${import.meta.env.VITE_BASE_URL}/stock/detail?isDaily=${frequency === "daily" ? true : false}&ma=${ma}&stockid=${stock}&index=${index}`} />)
    }
    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-16 mr-16 ml-16 mt-16">
                <div className='flex gap-8 justify-center'>
                    {stockList.length ? <SelectionAutocomplete data={stockList} selectData='stock' setData={setStock} defaultKey={stockList[0].ID} /> : <SkeletonLoad />}
                    {indexList.length ? <SelectionAutocomplete data={indexList} selectData='index' setData={setIndex} defaultKey={indexList[0].ID} /> : <SkeletonLoad />}
                    <Input size="sm" type="input" label="MA Length RS" value={ma} onValueChange={setMa} />
                    <SelectFrequency frequencyList={frequencyList} setFrequency={setFrequency} />
                    <Button radius="sm" size="lg" color="primary" onClick={fetchData}>Get Details</Button>
                </div>
                {stockDetailsComponent}
            </div >
        </>
    )
}

export default AnalyzeStock
