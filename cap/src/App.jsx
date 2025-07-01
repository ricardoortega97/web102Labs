import { useState } from 'react'
import APIForm from './components/APIForm';
import Gallary from './components/Gallary';
import './App.css'

function App() {
    const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
    
    const [currentImage, setCurrentImage] = useState(null);
    const [prevImages, setPrevImages] = useState([]);
    const [quota, setQuota] = useState(null); // To track the API usage quota
    const [inputs, setInputs] = useState({
        url : '',
        format: '',
        no_ads: '',
        no_cookie_banner: '',
        width: '',
        height: '',
    });

    const submitForm = () => {
        let defaultValues = {
            format: 'jpeg',
            no_ads: 'true',
            no_cookie_banner: 'true',
            width: '1920',
            height: '1080',
        }
        if (inputs.url == "" || inputs.url == " ") {
            alert("You forgot to submit an url!");
        } else {
            for (const [key, value] of Object.entries(inputs)) {
                if (value === "") {
                    inputs[key] = defaultValues[key];
                }
            }
            makeQuery();
        }
    }

    const makeQuery = () => {
        let wait_until = "network_idle";
        let response_type = "json";
        let fail_on_status = "400%2C404%2C500-511";
        let url_starter = "https://";
        let fullURL = url_starter + inputs.url;

        let query = `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&url=${fullURL}&format=${inputs.format}&width=${inputs.width}&height=${inputs.height}&no_cookie_banners=${inputs.no_cookie_banner}&no_ads=${inputs.no_ads}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;
        callAPI(query).catch(console.error);
    }

    const callAPI = async (query) => {
        const response = await fetch(query);
        const json = await response.json();

        if (json.url == null) {
            alert("Oops! Something went wrong with that query, let's try again!")
                }
            else {
            setCurrentImage(json.url);
            setPrevImages((images) => [...images, json.url]);
            reset();
            getQuota();
        }
    }

    const getQuota = async () => {
        const response = await fetch("https://api.apiflash.com/v1/urltoimage/quota?access_key=" + ACCESS_KEY);
        const result = await response.json();
        setQuota(result);

    }

    const reset = () => {
        setInputs({
            url: '',
            format: '',
            no_ads: '',
            no_cookie_banner: '',
            width: '',
            height: '',
        });
    }

    return (
        <div className="whole-page">
            {quota ? (
                <p className="quota">
                {" "}
                Remaining API calls: {quota.remaining} out of {quota.limit} 
            </p>
            ) :
            (
                <p></p>
            )}
            <h1>Build your own screenshot</h1>
            
            <APIForm
                inputs={inputs}
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value.trim()
                }
                ))}
                onSubmit={submitForm}
            />
            <br></br>
            {/* Conditional rendering to display the screenshot */}
            {currentImage ? (
                <img src={currentImage} alt="Screenshot returned" className="screenshot" />
            ) :
            (
                <div> </div>
            )}

            <div className="container">
                <h3 className=""> Current Query Status: </h3>
                <p>
                    https://api.apiflash.com/v1/urltoimage?access_key=ACCESS_KEY
                    <br></br>
                    &url={inputs.url}
                    <br></br>
                    &format={inputs.format}
                    <br></br>
                    &width={inputs.width}
                    <br></br>
                    &height={inputs.height}
                    <br></br>
                    &no_cookie_banners={inputs.no_cookie_banner}
                    <br></br>
                    &no_ads={inputs.no_ads}
                    <br></br>
                </p>
            </div>
            
            <div className="container">
                <Gallary images={prevImages} />
            </div>
            
        </div>
    )
}

export default App
