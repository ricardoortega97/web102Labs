import {  useState, useEffect } from 'react'
import CoinInfo from './components/CoinInfo';
import SideNav from './components/SideNav';
import './App.css'

function App() {
    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const [list, setList] = useState(null);
    const [filteredResults, setFilteredResults] = useState([])
    const [searchInput, setSearchInput] = useState("")

    const searchItems = searchValue => {
    setSearchInput(searchValue)
    if (searchValue !== "") {
        const filteredData = Object.keys(list.Data).filter((item) => 
        Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
        setFilteredResults(filteredData)
    } else {
        setFilteredResults(Object.keys(list.Data))
    }
    }

    useEffect(() => {
        const fetchAllCoinData = async () => {
            const response = await fetch (`https://min-api.cryptocompare.com/data/all/coinlist?api_key=` + API_KEY);
            const json = await response.json();
            setList(json);
        }
        fetchAllCoinData().catch(console.error);
    },[]);

    return (
        <>
            <div className="whole-page">
                <div>
                    <h1>Crypto List</h1>
                <input type="text"
                    placeholder='Search for a coin...'
                    onChange={(inputString) => searchItems(inputString.target.value)}
                />
                {searchInput.length > 0
                ? filteredResults
                .map((coin) => {
                    const coinData = list.Data[coin]
                    if (
                        coinData.IsTrading &&
                        coinData.Algorithm !== "N/A" &&
                        coinData.ProofType !== "N/A"
                    ) {
                    return (
                        <CoinInfo
                        key={coin}
                        image={coinData.ImageUrl}
                        name={coinData.FullName}
                        symbol={coinData.Symbol}
                        />
                    )
                    }
                    return null
                })
                : list &&
                    Object.entries(list.Data)
                    .filter(
                        ([_, coinData]) =>
                        coinData.isTrading &&
                        coinData.Algorithm !== "N/A" &&
                        coinData.ProofType !== "N/A"
                    )
                    .slice(0, 20)
                    .map(([coin, coinData]) => (
                        <CoinInfo
                        key={coin}
                        image={coinData.ImageUrl}
                        name={coinData.FullName}
                        symbol={coinData.Symbol}
                    />
                ))}
                </div>
                <div>
                    <SideNav />
                </div>
            </div>
        </>
    )
}

export default App
