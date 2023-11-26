import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { toast } from "sonner";
import useSWR from "swr";
import { stockListWithIndexState } from "../store/stockListState";

const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());

export function StockListFetchSet() {
    const [, setStockListWithIndex] = useRecoilState(stockListWithIndexState)
    const { data, error, isLoading }: { data: Stock[], error: string | undefined, isLoading: boolean } = useSWR(`${import.meta.env.VITE_BASE_URL}/stock`, fetcher)
    useEffect(() => {
        if (data) {
            setStockListWithIndex(data)
        }
    }, [data, setStockListWithIndex])
    if (isLoading) return toast.info('Fetching Stock List...')
    if (error) return toast.error('Error Fetching Stock List.')
    if (data) return toast.success('Fetching Stock List successful')
}