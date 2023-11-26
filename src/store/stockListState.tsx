import { atom } from "recoil";

export const stockListState = atom({
    key: 'stockList',
    default: [] as Stock[],
});