import React from "react";

const ImageListComponent = ({ userData }) => {
  return (
    <div>
      {userData.map(el => (
        <div>
          <img src={el.img_url} alt={el.user_description} key={el.img_id} />
          <p>{userData.user_description}</p>
        </div>
      ))}
    </div>
  )
}

export default ImageListComponent;
