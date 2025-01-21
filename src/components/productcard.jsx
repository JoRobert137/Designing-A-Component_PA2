// eslint-disable-next-line no-unused-vars
import React from 'react';
import handleClick from './button';

const Productcard = () => {
    const prodImage = '../Screenshot 2024-08-26 125015.png';
    const prodName = 'Cute Kalvium Dog';
    const prodPrice = "6 Belts in DOJO";

    return (
        <div>
            <img src={prodImage} alt="Product Image" />
            <h2>{prodName}</h2>
            <p>
                <strong>Price: </strong>
                {prodPrice}
            </p>
            <div>
                <button onClick={handleClick}>
                    View Product Details
                </button>
            </div>
        </div>
    )
}

export default Productcard;
