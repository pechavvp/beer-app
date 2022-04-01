import React, { useState, useEffect } from 'react';
import './styles/App.css';
import UserInfo from './components/UserInfo/UserInfo';
import BeerBlock from './components/BeerBlock/BeerBlock';
import { ResponseUserContext, ResponseBeerContext } from './context/context';

function App() {
  const [responseUserInfo, setResponseUserInfo] = useState(null);
  const [responseBeerInfo, setResponseBeerInfo] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  async function loadInfo() {
    const userInfoUrl = 'https://random-data-api.com/api/users/random_user';
    const beerInfoUrl = 'https://random-data-api.com/api/beer/random_beer';

    let responseUserInfo = await fetch(userInfoUrl)
    .then(response => response.json())
    .then(function(response) {
            console.log(response);
            setResponseUserInfo(response);
    })
    .catch(err => console.log(err.message));

    let responseBeerInfo = await fetch(beerInfoUrl)
    .then(response => response.json())
    .then(function(response) {
            console.log(response);
            setResponseBeerInfo(response);
    })
    .catch(err => console.log(err.message));
}


  return (
    <div className="main-block">
      <ResponseUserContext.Provider value={[responseUserInfo, setResponseUserInfo]}>
        <ResponseBeerContext.Provider value={[responseBeerInfo, setResponseBeerInfo]}>
          <UserInfo/>
          <BeerBlock/>
        </ResponseBeerContext.Provider>
      </ResponseUserContext.Provider>
    </div>
  );
}

export default App;
