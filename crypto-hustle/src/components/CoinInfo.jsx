import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
const API_KEY = import.meta.env.VITE_APP_API_KEY

const CoinInfo = ({ image, name , symbol }) => {
    const [price, setPrice] = useState(null);
    
    useEffect(() => {
        const controller = new AbortController();

        const getCoinPrice = async () => {
            try {
                const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${API_KEY}`, {
                signal: controller.signal
            });
            const json = await response.json();
            setPrice(json);
            } catch (error) {
                if (error.name === 'AbortError') {
                } else {
                    console.error("Error fetching coin price:", error);
                }
            }
        }
        
        getCoinPrice().catch(console.error);
        return () => {
            controller.abort();
        }
    }, [symbol])

    return (
        <div>
            {price ? (
                <ul>
                    <li className="main-list" key={symbol}>
                        <Link
                        style={{ color: "White" }}
                        to={`/coinDetails/${symbol}`}
                        key={symbol}
                        >
                            <img
                            className="icons"
                            src={`https://www.cryptocompare.com${image}`}
                            alt={`Small icon for ${name} crypto coin`}
                            />
                            {name}
                            {price && price.USD ? ` $${price.USD} USD` : null}
                        </Link>
                    </li>
                </ul>
            ) : (
                <p>Loading price...</p>
            )}
        </div>
    )
}

export default CoinInfo