import React, { useContext } from 'react';
import './BeerBlock.css';
import { ResponseBeerContext } from '../../context/context';

function BeerBlock() {
    const [responseBeerInfo, setResponseBeerInfo] = useContext(ResponseBeerContext);

    let beerBrand = "";
    let beerName = "";
    let beerAlco = "";
    let beerStyle = "";

    if (responseBeerInfo) {
        beerBrand = responseBeerInfo.brand;
        beerName = responseBeerInfo.name;
        beerStyle = responseBeerInfo.style;
        beerAlco = responseBeerInfo.alcohol;
    }

  return (
    <div className="beer-block">
        <h2 className="beer-block__title">Recommended beer:</h2>
        <div className="beer-block__info">
            <p className="beer-block__info-name">{beerBrand + " " + beerName}</p>
            <p className="beer-block__info-props">{beerStyle + " " + beerAlco}</p>
        </div>
    </div>
  )
}

export default BeerBlock;