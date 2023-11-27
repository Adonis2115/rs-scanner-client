import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Toaster, toast } from "sonner";
import useSWR from "swr";
import { stockListWithIndexState } from "../store/stockListState";

const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());

export function StockListFetchSet() {
    const [stockListWithIndex, setStockListWithIndex] = useRecoilState(stockListWithIndexState)
    const { data, error, isLoading }: { data: Stock[], error: string | undefined, isLoading: boolean } = useSWR(`${import.meta.env.VITE_BASE_URL}/stock`, fetcher)
    useEffect(() => {
        if (stockListWithIndex.length == 0 && data) {
            setStockListWithIndex(data)
        }
    }, [data, setStockListWithIndex, stockListWithIndex])
    if (isLoading) toast.info('Fetching Stock List...', { duration: 1000 })
    if (error) toast.error('Error Fetching Stock List.', { duration: 5000 })
    if (data) toast.success('Fetching Stock List successful', { duration: 1000 })
    return <Toaster position="bottom-right" />
}