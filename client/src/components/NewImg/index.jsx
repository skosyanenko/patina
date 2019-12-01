import React from "react";
import "./index.sass";

const NewImg = () => {
  return (
      <div className="new-img"
      style={{
          background: `
          url('/images/news/detail/1.png') no-repeat 28% top / 65%, 
          url('/images/news/detail/2.png') no-repeat right bottom / 65%, 
          url('/images/news/1.png') no-repeat 80% 45% / 77% `
      }}
      />
  )
};

export default NewImg;
