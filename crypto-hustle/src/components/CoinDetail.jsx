import { Component, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CoinChart from "./CoinChart";
const API_KEY = import.meta.env.VITE_APP_API_KEY

const CoinDetail = () => {
    const { symbol } = useParams()
    const [fullDetails, setFullDetails] = useState(null);

    useEffect(() => {
        const fetchConinDetails = async () => {
            try {
                const details = await fetch(
                    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD&api_key=${API_KEY}`
                );

                const description = await fetch(
                    `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${symbol}&api_key=${API_KEY}`
                )
                const detailsJson = await details.json()
                const descripJson = await description.json()

                setFullDetails({
                    numbers: detailsJson.DISPLAY,
                    textData: descripJson.Data
                })
            } 
            catch (error) {
                console.error("Error fetching coin details:", error);
            }
        };
        fetchConinDetails();
    }, [symbol]);

    return (
        <div>
            {fullDetails && (
                <>
                    <h1>{fullDetails.textData[symbol].FullName}</h1>
                    <img
                    className="images"
                    src={`https://www.cryptocompare.com${
                        fullDetails.numbers[symbol].USD.IMAGEURL
                    }`}
                    alt={`Small icon for ${symbol} crypto coin`}
                    />
                    <div> {fullDetails.textData[symbol].Description}</div>
                    <br></br>
                    <div>
                    This coin was built with the algorithm{" "}
                    {fullDetails.textData[symbol].Algorithm}{" "}
                    </div>

                    <table>
                        <tbody> 
                                <tr>
                                    <th>Launch Date </th>
                                    <td>{fullDetails.textData[symbol].AssetLaunchDate}  </td>
                                </tr>
                                <tr>
                                    <th>Website </th>
                                    <td>{fullDetails.textData[symbol].AssetWebsiteUrl}</td>
                                </tr>
                                <tr>
                                    <th>Whitepaper </th>
                                    <td>{fullDetails.textData[symbol].AssetWhitepaperUrl} </td>
                                </tr>
                                <tr>
                                    <th>Monetary Symbol </th>
                                    <td> {fullDetails.textData[symbol].Symbol}</td>
                                </tr>
                                <tr>
                                    <th>Market </th>
                                    <td>{fullDetails.numbers[symbol].USD.MARKET} </td>
                                </tr>
                                <tr>
                                    <th>Last Transaction </th>
                                    <td>{fullDetails.numbers[symbol].USD.LASTUPDATE} </td>
                                </tr>
                                <tr>
                                    <th>Last Transaction Value</th>
                                    <td>{fullDetails.numbers[symbol].USD.PRICE}</td>
                                </tr>
                                <tr>
                                    <th>Volume </th>
                                    <td>{fullDetails.numbers[symbol].USD.LASTVOLUME} </td>
                                </tr>
                                <tr>
                                    <th>Today's Open Price </th>
                                    <td>{fullDetails.numbers[symbol].USD.OPENDAY}</td>
                                </tr>
                                <tr>
                                    <th>Highest Price during the Day </th>
                                    <td>{fullDetails.numbers[symbol].USD.HIGHDAY}</td>
                                </tr>
                                <tr>
                                    <th>Lowest Price during the Day </th>
                                    <td>{fullDetails.numbers[symbol].USD.LOWDAY}</td>
                                </tr>
                                <tr>
                                    <th>Change from Previous Day </th>
                                    <td>$0.0 0.0%</td>
                                </tr>
                                <tr>
                                    <th>Market Cap </th>
                                    <td>{fullDetails.numbers[symbol].USD.MKTCAP}</td>
                                </tr>
                            </tbody>
                        </table>

                    <CoinChart
                        symbol={symbol}
                        market={fullDetails.numbers[symbol].USD.MARKET}
                    />
                    
                </>
            )}
            {!fullDetails && <p>Loading...</p>}   
        </div>
    )
};

export default CoinDetail;
