import React, { useContext } from 'react';
import ava from '../../img/ava.png';
import './UserInfo.css';
import { ResponseUserContext } from '../../context/context';

function UserInfo() {
    const [responseUserInfo, setResponseUserInfo] = useContext(ResponseUserContext);

    let userPhoto = ava;
    let userFirstName = "";
    let userLastName = "";
    let userAge = "";
    let userWork = "";

    if (responseUserInfo) {
        userFirstName = responseUserInfo.first_name;
        userLastName = responseUserInfo.last_name;
        userAge = "Age: " + getAge(responseUserInfo.date_of_birth);
        userWork = "Employment: " + responseUserInfo.employment.title;
        
        loadAvavtar();
        
        async function loadAvavtar() {
            let response = await fetch(responseUserInfo.avatar)
            .then(function(response) {
            console.log(response);
            })
            .catch(err => console.log(err.message));
                }
    }

    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

  return (
    <div className="user-info">
        <div className="user-info__image-block">
          <img className="user-info__image-block-photo" src={userPhoto}></img>
        </div>
        <div className="user-info__text-block">
          <p className="user-info__text-block-name">{userFirstName + " " + userLastName}</p>
          <p className="user-info__text-block-age">{userAge}</p>
          <p className="user-info__text-block-work">{userWork}</p>
        </div>
      </div>
  )
}

export default UserInfo;