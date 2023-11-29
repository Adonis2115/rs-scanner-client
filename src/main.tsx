import { NextUIProvider } from "@nextui-org/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from "recoil";
import App from './App.tsx';
import { StockListFetchSet } from "./hooks/StockListFetchSet.tsx";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RecoilRoot>
        <StockListFetchSet />
        <App />
      </RecoilRoot>
    </NextUIProvider>
  </React.StrictMode>,
)
