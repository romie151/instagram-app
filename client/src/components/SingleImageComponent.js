import React from "react";

const SingleImageComponent = ({ imgData }) => {
  return (
    <div id="singleimageoutercontainer">
    <div id="singleimagecontainer">
      <img id="singleimage" src={imgData[0].img_url} alt='something' />
      <div id="sidebar">
      </div>
      </div> 
    </div>
  )
}

export default SingleImageComponent;
