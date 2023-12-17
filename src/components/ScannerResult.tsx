import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { SetStateAction, useMemo, useState } from "react";
import { Toaster, toast } from "sonner";
import useSWR from "swr";
import { marketCap } from "../../data/selection";
import { ChevronDownIcon } from "./UI/ChevronDownIcon";

const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
export default function ScannerResult({ url }: { url: string }) {
    const { data, error, isLoading }: { data: StockDetail[], error: string | undefined, isLoading: boolean } = useSWR(url, fetcher)
    const [selectedStocks, setSelectedStocks] = useState<Set<never> | 'all'>(new Set([]));
    const [selectedSymbolToCopy, setSelectedSymbolToCopy] = useState<StockDetail[]>([])
    const [marketFilter, setMarketFilter] = useState<MarketFilter>('all')
    const filteredMarket = useMemo(() => {
        setSelectedStocks(new Set([]))
        setSelectedSymbolToCopy([])
        if (data) {
            let filteredMarketCap = [...data];
            if (marketFilter !== "all" && Array.from(marketFilter).length !== marketCap.length) {
                filteredMarketCap = filteredMarketCap.filter((item) =>
                    Array.from(marketFilter).includes(item.ScriptType),
                );
            }
            return filteredMarketCap;
        }
        else return []
    }, [data, marketFilter]);
    if (error) return "Error..."
    else if (isLoading) return "Loading..."
    const copyToClipboard = () => {
        if (selectedSymbolToCopy.length) {
            const symbols = selectedSymbolToCopy.map(item => item.Symbol)
            const copyData = symbols.join(', ')
            navigator.clipboard.writeText(copyData)
            toast.success('List copied to clipboard', { duration: 1000 })
        }
        else toast.error('Select scripts to copy !', { duration: 1000 })
    }
    const handleSelectionChange = (keys: Set<never> | "all") => {
        setSelectedStocks(keys)
        if (keys === 'all') setSelectedSymbolToCopy(filteredMarket)
        else {
            const tmpStocks: StockDetail[] = []
            keys.forEach((x) => {
                tmpStocks.push(filteredMarket[x])
            })
            setSelectedSymbolToCopy(tmpStocks)
        }
    }
    return (
        <div className="grid gap-4">
            <Toaster position="bottom-right" />
            <div className="flex gap-4 justify-around mb-4" >
                <Dropdown size="sm">
                    <DropdownTrigger className="hidden sm:flex">
                        <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                            Market Cap
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        disallowEmptySelection
                        aria-label="Table Columns"
                        closeOnSelect={false}
                        selectedKeys={marketFilter}
                        selectionMode="multiple"
                        onSelectionChange={(keys) => setMarketFilter(keys as SetStateAction<MarketFilter>)}
                    >
                        {marketCap.map((cap) => (
                            <DropdownItem key={cap.value} className="capitalize">
                                {cap.label}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                <Chip size="lg">{`Selected ${selectedSymbolToCopy.length}`}</Chip>
                <Button size="sm" color="primary" onClick={copyToClipboard}>Copy</Button>
            </div>
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
                    {filteredMarket.map((stock, index) =>
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
