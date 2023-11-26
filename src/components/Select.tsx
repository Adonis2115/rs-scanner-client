import { Select, SelectItem } from "@nextui-org/react";
import { SetStateAction } from "react";

export default function SelectComponent({ filterList, setFilter }: { filterList: { label: string, value: string }[], setFilter: React.Dispatch<React.SetStateAction<string | null>> }) {
    const handleSelectionChange = (e: { target: { value: SetStateAction<string | null>; }; }) => {
        setFilter(e.target.value);
    };
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Select
                label="Select filter"
                className="max-w-xs"
                size="sm"
                onChange={handleSelectionChange}
            >
                {filterList.map((filter) => (
                    <SelectItem key={filter.value} value={filter.value}>
                        {filter.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
}
