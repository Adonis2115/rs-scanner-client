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
  PreviousRS: string;
  Name: string;
  Stock_id: number;
  Streak: number;
  Symbol: string;
  ScriptType: string;
  Industry: string;
}

interface Stock {
  ID: number;
  Name: string;
  ScriptType: string;
  Industry: string;
  Symbol: string;
}
