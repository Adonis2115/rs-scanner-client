import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StockListFetchSet } from './components/StockListFetchSet';
import AnalyzeStock from "./routes/AnalyzeStock";
import Positions from './routes/Positions';
import Scanner from "./routes/Scanner";

function App() {
  return (
    <BrowserRouter>
      <StockListFetchSet />
      <Routes>
        <Route
          path="/"
          element={<AnalyzeStock />} />
        <Route
          path="/scanner"
          element={<Scanner />} />
        <Route
          path="/positions"
          element={<Positions />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
