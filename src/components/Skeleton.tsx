import { Skeleton } from "@nextui-org/react";

export default function SkeletonLoad() {
    return (
        <div className="max-w-[300px] w-full flex items-center gap-3">
            <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-3 w-3/5 rounded-lg" />
                <Skeleton className="h-3 w-4/5 rounded-lg" />
            </div>
        </div>
    );
}
