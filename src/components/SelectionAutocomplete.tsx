import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Key } from "react";

export default function SelectionAutocomplete({ data, selectData, setData, defaultKey }: {
    data: Stock[], selectData: string, setData: React.Dispatch<React.SetStateAction<number | null>>, defaultKey: number
}) {
    const onSelectionChange = (id: Key) => {
        setData(id as number);
    };
    return (
        <Autocomplete
            defaultItems={data}
            label={`Select ${selectData}`}
            size="sm"
            onSelectionChange={onSelectionChange}
            defaultSelectedKey={defaultKey.toString()}
        >
            {(stock) => <AutocompleteItem key={stock.ID}>{stock.Name}</AutocompleteItem>}
        </Autocomplete>
    );
}