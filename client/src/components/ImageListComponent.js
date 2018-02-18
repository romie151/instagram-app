import React from "react";
import { Link } from "react-router-dom";

const ImageListComponent = ({ userData }) => {
  return (
    <div>
    <div id="topbar">
    <img id="instalogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/1024px-Instagram_simple_icon.svg.png" />
    <img id="instatitle" src="https://fontmeme.com/images/instagram-new-logo.png" />
    <input id="search" placeholder="search" />
    </div>
    <h1> {userData.username} </h1>
    <div className="imglist">
      {userData.map(el => (
        <div key={el.img_id}>
          <Link to={`/user/${el.img_id}`}>
            <img className="listimage" src={el.img_url} alt={el.user_description} img_id={el.img_id} />
          </Link>
          <p>{userData.user_description}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ImageListComponent;
