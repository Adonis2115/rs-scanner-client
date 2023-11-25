import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import useSWR from "swr";

const fetcher = (...args: Parameters<typeof fetch>) => 
    fetch(...args).then((res) => res.json());
export default function StockDetails({ url }: { url: string }) {
    const { data, error, isLoading } = useSWR(url, fetcher)
    if(error) return "Error..."
    else if(isLoading) return "Loading..."
    return (
        <Table isStriped aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Key</TableColumn>
                <TableColumn>Value</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>Name</TableCell>
                    <TableCell>{data.Name}</TableCell>
                </TableRow>
                <TableRow key="2">
                    <TableCell>Symbol</TableCell>
                    <TableCell>{data.Symbol}</TableCell>
                </TableRow>
                <TableRow key="3">
                    <TableCell>Side</TableCell>
                    <TableCell>Bullish</TableCell>
                </TableRow>
                <TableRow key="4">
                    <TableCell>Cross</TableCell>
                    <TableCell>Cross Over</TableCell>
                </TableRow>
                <TableRow key="5">
                    <TableCell>RS Last</TableCell>
                    <TableCell>{data.PreviousRS}</TableCell>
                </TableRow>
                <TableRow key="6">
                    <TableCell>RS Current</TableCell>
                    <TableCell>{data.CurrentRS}</TableCell>
                </TableRow>
                <TableRow key="7">
                    <TableCell>{data.MA_Length} Period MA of RS</TableCell>
                    <TableCell>{data.MA}</TableCell>
                </TableRow>
                <TableRow key="8">
                    <TableCell>Current Streak</TableCell>
                    <TableCell>{data.Streak}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
