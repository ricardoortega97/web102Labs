import { use, useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY

const CoinInfo = ({ image, name , symbol }) => {
    const [price, setPrice] = useState(null);
    
    useEffect(() => {
        const getCoinPrice = async () => {
            const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${API_KEY}`);
            const json = await response.json();
            setPrice(json);
        }
        getCoinPrice().catch(console.error);
    }, [symbol])
    return (
        <div>
            {price ? (
                <ul>
                    <li className="main-list" key={symbol}>
                        <img src={`https://www.cryptocompare.com${image}`} alt={`small icon for ${name}`} className="icons" />
                        {name} <span className="tab"></span>
                        {price && price.USD ? ` $${price.USD} USD` : null}
                    </li>
                </ul>
            ) : (
                <p>Loading price...</p>
            )}
        </div>
    )
}

export default CoinInfo