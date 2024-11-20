import React, {useState, useEffect} from "react";
import "./Greetingimg.scss";

const FlipImage = ({
  frontImage,
  backImage,
  size = "200px",
  flipInterval = 6000
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prevState => !prevState);
    }, flipInterval);

    return () => clearInterval(interval);
  }, [flipInterval]);

  return (
    <div className="flip-image-container" >
      <div className={`flip-image-inner ${isFlipped ? "flipped" : ""}`}>
        <img className="flip-image" src={frontImage} alt="Front" />
        <img className="flip-image back" src={backImage} alt="Back" />
      </div>
    </div>
  );
};

export default FlipImage;
