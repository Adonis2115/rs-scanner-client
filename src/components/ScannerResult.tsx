import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import useSWR from "swr";

const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
export default function ScannerResult({ url }: { url: string }) {
    const { data, error, isLoading }: { data: StockDetail[], error: string | undefined, isLoading: boolean } = useSWR(url, fetcher)
    const [selectedStocks, setSelectedStocks] = useState<Set<never> | 'all'>(new Set([]));
    const [selectedSymbolToCopy, setSelectedSymbolToCopy] = useState<StockDetail[]>([])
    if (error) return "Error..."
    else if (isLoading) return "Loading..."
    const copyToClipboard = () => {
        const symbols = selectedSymbolToCopy.map(item => item.Symbol)
        const copyData = symbols.join(', ')
        navigator.clipboard.writeText(copyData)
        toast.success('List copied to clipboard', { duration: 1000 })
    }
    console.log(selectedSymbolToCopy.length)
    const handleSelectionChange = (keys: Set<never> | "all") => {
        setSelectedStocks(keys)
        if (selectedStocks === 'all') setSelectedSymbolToCopy(data)
        else {
            const tmpStocks: StockDetail[] = []
            selectedStocks.forEach((x) => {
                tmpStocks.push(data[x])
            })
            setSelectedSymbolToCopy(tmpStocks)
        }
    }
    return (
        <div className="grid">
            <Toaster position="bottom-right" />
            <Button className="justify-self-end mb-4" radius="sm" size="sm" color="primary" onClick={copyToClipboard}>Copy</Button>
            <Table
                aria-label="Example static collection table"
                selectedKeys={selectedStocks}
                selectionMode="multiple"
                selectionBehavior="toggle"
                onSelectionChange={(keys) => handleSelectionChange(keys as Set<never> | "all")}
            >
                <TableHeader>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Symbol</TableColumn>
                    <TableColumn>Market Cap</TableColumn>
                    <TableColumn>Industry</TableColumn>
                    <TableColumn>MA RS</TableColumn>
                    <TableColumn>Current RS</TableColumn>
                    <TableColumn>Previous RS</TableColumn>
                    <TableColumn>Streak</TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map((stock, index) =>
                        <TableRow key={index}>
                            <TableCell>{stock.Name}</TableCell>
                            <TableCell>{stock.Symbol}</TableCell>
                            <TableCell>{`${stock.ScriptType.replace(/^\w/, c => c.toUpperCase())} Cap`}</TableCell>
                            <TableCell>{stock.Industry}</TableCell>
                            <TableCell>{Number(stock.MA).toFixed(2)}</TableCell>
                            <TableCell>{Number(stock.CurrentRS).toFixed(2)}</TableCell>
                            <TableCell>{Number(stock.PreviousRS).toFixed(2)}</TableCell>
                            <TableCell>{stock.Streak}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
