import { Select, SelectItem } from "@nextui-org/react";
import { SetStateAction } from "react";

export default function SelectComponent({ frequencyList, setFrequency }: { frequencyList: { label: string, value: string }[], setFrequency: React.Dispatch<React.SetStateAction<string | null>> }) {
    const handleSelectionChange = (e: { target: { value: SetStateAction<string | null>; }; }) => {
        setFrequency(e.target.value);
    };
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Select
                label="Select timeframe"
                className="max-w-xs"
                size="sm"
                onChange={handleSelectionChange}
                defaultSelectedKeys={["weekly"]}
            >
                {frequencyList.map((frequency) => (
                    <SelectItem key={frequency.value} value={frequency.value}>
                        {frequency.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
}
