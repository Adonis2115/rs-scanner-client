import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import useSWR from "swr";

const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
export default function StockDetails({ url }: { url: string }) {
    const { data, error, isLoading }: { data: StockDetail, error: string | undefined, isLoading: boolean } = useSWR(url, fetcher)
    if (error) return "Error..."
    else if (isLoading) return "Loading..."
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
                    <TableCell>Market Cap</TableCell>
                    <TableCell>{`${data.ScriptType.replace(/^\w/, c => c.toUpperCase())} Cap`}</TableCell>
                </TableRow>
                <TableRow key="4">
                    <TableCell>Industry</TableCell>
                    <TableCell>{data.Industry}</TableCell>
                </TableRow>
                <TableRow key="5">
                    <TableCell>Side</TableCell>
                    <TableCell>{data.Bearish ? "Bearish" : "Bullish"}</TableCell>
                </TableRow>
                <TableRow key="6">
                    <TableCell>Cross</TableCell>
                    <TableCell>{data.CrossOver ? `RS Cross Over ${data.MA_Length} MA RS` : (data.CrossUnder ? `RS Cross Under ${data.MA_Length} MA RS` : "-")}</TableCell>
                </TableRow>
                <TableRow key="7">
                    <TableCell>RS Last</TableCell>
                    <TableCell>{data.PreviousRS}</TableCell>
                </TableRow>
                <TableRow key="8">
                    <TableCell>RS Current</TableCell>
                    <TableCell>{data.CurrentRS}</TableCell>
                </TableRow>
                <TableRow key="9">
                    <TableCell>{data.MA_Length} Period MA of RS</TableCell>
                    <TableCell>{data.MA}</TableCell>
                </TableRow>
                <TableRow key="10">
                    <TableCell>Current Streak</TableCell>
                    <TableCell>{data.Streak}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
