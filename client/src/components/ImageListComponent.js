import React from "react";
import { Link } from "react-router-dom";

const ImageListComponent = ({ userData }) => {
  return (
    <div>
      {userData.map(el => (
        <div key={el.img_id}>
          <Link to={`/user/${el.img_id}`}>
            <img src={el.img_url} alt={el.user_description} img_id={el.img_id} />
          </Link>
          <p>{userData.user_description}</p>
        </div>
      ))}
    </div>
  )
}

export default ImageListComponent;
