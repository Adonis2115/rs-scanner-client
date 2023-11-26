import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Key } from "react";

export default function SelectionAutocomplete({ data, selectData, setData }: {
    data: Stock[], selectData: string, setData: React.Dispatch<React.SetStateAction<number | null>>
}) {
    const onSelectionChange = (id: Key) => {
        setData(id as number);
    };
    return (
        <Autocomplete
            label={`Select ${selectData}`}
            size="sm"
            onSelectionChange={onSelectionChange}
            defaultSelectedKey={"1"}
        >
            {data.map((item) => (
                <AutocompleteItem key={item.ID} value={item.Name}>
                    {item.Symbol}
                </AutocompleteItem>
            ))}
        </Autocomplete>
    );
}