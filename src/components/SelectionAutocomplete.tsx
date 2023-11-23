import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

export default function SelectionAutocomplete({ data, selectData }: { data: { id: number, label: string, value: string }[], selectData: string }) {
    return (
        <Autocomplete
            label={`Select ${selectData}`}
            size="sm"
        >
            {data.map((item) => (
                <AutocompleteItem key={item.label} value={item.value}>
                    {item.value}
                </AutocompleteItem>
            ))}
        </Autocomplete>
    );
}