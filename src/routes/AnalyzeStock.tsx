import { Button, Input } from "@nextui-org/react";
import { ReactNode, useState } from "react";
import { useRecoilState } from "recoil";
import Navbar from "../components/Navbar";
import SelectionAutocomplete from "../components/SelectionAutocomplete";
import StockDetails from "../components/StockDetails";
import { stockListState } from "../store/stockListState";

function AnalyzeStock() {
    const [stockList,] = useRecoilState(stockListState)
    const [stock, setStock] = useState<number | null>(null)
    const [index, setIndex] = useState<number | null>(null)
    const [ma, setMa] = useState<string>("20")
    const [stockDetailsComponent, setStockDetailsComponent] = useState<ReactNode>(null)
    const fetchData = () => {
        setStockDetailsComponent(<StockDetails url={`${import.meta.env.VITE_BASE_URL}/stock/detail?ma=${ma}&stockid=${stock}&index=${index}`} />)
    }
    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-16 mr-16 ml-16 mt-16">
                <div className='flex gap-8 justify-center'>
                    <SelectionAutocomplete data={stockList} selectData='stock' setData={setStock} />
                    <SelectionAutocomplete data={stockList} selectData='index' setData={setIndex} />
                    <Input size="sm" type="input" label="MA Length RS" value={ma} onValueChange={setMa} />
                    <Button radius="sm" size="lg" color="primary" onClick={fetchData}>Get Details</Button>
                </div>
                {stockDetailsComponent}
            </div >
        </>
    )
}

export default AnalyzeStock
