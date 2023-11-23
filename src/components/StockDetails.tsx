import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

export default function StockDetails() {
    return (
        <Table isStriped aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Key</TableColumn>
                <TableColumn>Value</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>Name</TableCell>
                    <TableCell>Tata Consultancy Services</TableCell>
                </TableRow>
                <TableRow key="2">
                    <TableCell>Symbol</TableCell>
                    <TableCell>TCS</TableCell>
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
                    <TableCell>14.5</TableCell>
                </TableRow>
                <TableRow key="6">
                    <TableCell>RS Current</TableCell>
                    <TableCell>15.2</TableCell>
                </TableRow>
                <TableRow key="7">
                    <TableCell>20 Period MA of RS</TableCell>
                    <TableCell>14.1</TableCell>
                </TableRow>
                <TableRow key="8">
                    <TableCell>Current Streak</TableCell>
                    <TableCell>5</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};
