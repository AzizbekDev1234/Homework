import { useState } from "react";
import "../Header/header.css";
const Header = () => {
  const [imageUrl, setImageUrl] = useState("");

  const getRandomImage = () => {
    fetch("https://source.unsplash.com/random")
      .then((response) => {
        setImageUrl(response.url);
      })
      .catch((error) => {
        console.error("Error fetching random image:", error);
      });
  };

  return (
    <div>
      <div className="random">
        <button onClick={getRandomImage} className="random_btn">
          Random
        </button>
        <img src={imageUrl} alt="Random Image" className="imgRandom" />
      </div>
    </div>
  );
};

export default Header;
