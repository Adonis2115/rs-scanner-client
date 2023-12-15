/// <reference types="vite/client" />
declare module "*env";

interface Env {
  VITE_BASE_URL: string;
}

interface Stock {
  ID: number;
  Name: string;
  ScriptType: string;
  Industry: string;
  Symbol: string;
}

interface StockDetail extends Stock {
  Bearish: boolean;
  Bullish: boolean;
  CrossOver: boolean;
  CrossUnder: boolean;
  CurrentRS: string;
  MA: string;
  MA_Length: number;
  PreviousRS: string;
  Streak: number;
}

type MarketFilter = "all" | "large" | "mid" | "small" | "micro";
