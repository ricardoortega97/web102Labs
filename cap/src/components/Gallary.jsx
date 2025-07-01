
const Gallary = ({ images }) => {
    return (
        <div className="gallery">
            <h2> Your ScreenShot Gallary </h2>
            <div className="image-container">
                {images && images.length > 0 ? (
                    images.map((pic, index) => (
                        <li className="gallary">
                            <img src={pic} alt="undefined screenshot form gallary"
                            key={index}
                            className="gallary-screenshot"
                            width={500}
                        />
                        </li>
                    ))
            ) : (
                <div>
                    <h3>No images available. lease take a screenshot first.</h3>    
                </div>
            )}
            </div>
        </div>
    );
}

export default Gallary;