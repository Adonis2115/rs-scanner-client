import { atom, selector } from "recoil";

export const stockListWithIndexState = atom({
    key: 'stockListWithIndex',
    default: [] as Stock[],
});

export const stockListState = selector({
    key: 'stockList',
    get: ({ get }) => {
        const allStocksWithIndex = get(stockListWithIndexState);
        const stockListFiltered = allStocksWithIndex.filter(stock => !stock.Index)
        return stockListFiltered;
    },
});

export const indexListState = selector({
    key: 'indexList',
    get: ({ get }) => {
        const allStocksWithIndex = get(stockListWithIndexState);
        const indexListFiltered = allStocksWithIndex.filter(stock => stock.Index)
        return indexListFiltered;
    },
});