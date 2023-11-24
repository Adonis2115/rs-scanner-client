import useSWR from "swr"

const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())

export function useData(url: string) {
    console.log(url)
    const { data, error, isLoading } = useSWR(url, fetcher)
    return {
        data: data,
        isLoading,
        error: error
    }
}