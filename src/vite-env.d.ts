/// <reference types="vite/client" />
declare module "*env";

interface Env {
  VITE_BASE_URL: string;
}

interface StockDetail {
  Bearish: boolean;
  Bullish: boolean;
  CrossOver: boolean;
  CrossUnder: boolean;
  CurrentRS: string;
  MA: string;
  MA_Length: number;
  Name: string;
  PreviousRS: string;
  Stock_id: number;
  Streak: number;
  Symbol: string;
}
