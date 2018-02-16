import React from "react";

const SingleImageComponent = ({ imgData }) => {
  return (
    <div>
      <img src={imgData[0].img_url} alt='something' />
    </div>
  )
}

export default SingleImageComponent;
