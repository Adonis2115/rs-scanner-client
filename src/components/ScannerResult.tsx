import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import useSWR from "swr";

const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
export default function ScannerResult({ url }: { url: string }) {
    const { data, error, isLoading }: { data: StockDetail[], error: string | undefined, isLoading: boolean } = useSWR(url, fetcher)
    if (error) return "Error..."
    else if (isLoading) return "Loading..."
    const symbols = data.map(item => item.Symbol)
    const copyData = symbols.join(', ')
    return (
        <div className="grid">
            <Button className="justify-self-end mb-4" radius="sm" size="sm" color="primary" onClick={() => navigator.clipboard.writeText(copyData)}>Copy</Button>
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Symbol</TableColumn>
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
