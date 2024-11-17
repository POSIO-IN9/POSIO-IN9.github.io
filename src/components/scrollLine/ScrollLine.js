import React, {useState, useEffect} from "react";
import "./ScrollLine.scss";

const ScrollLine = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;

      setScrollWidth(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scheader">
      <div className="scline" style={{width: `${scrollWidth}%`}}></div>
    </div>
  );
};

export default ScrollLine;
