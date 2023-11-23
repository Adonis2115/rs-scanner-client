import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

export default function App({ data, selectData }: { data: { id: number, label: string, value: string }[], selectData: string }) {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Autocomplete
                label={`Select ${selectData}`}
                className="max-w-xs"
            >
                {data.map((item) => (
                    <AutocompleteItem key={item.value} value={item.value}>
                        {item.label}
                    </AutocompleteItem>
                ))}
            </Autocomplete>
        </div>
    );
}