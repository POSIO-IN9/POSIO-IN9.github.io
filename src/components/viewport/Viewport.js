import React, { useState, useEffect } from 'react';
import { Fade } from 'react-reveal';
import './Viewport.scss';

export default function Viewport() {

  const TOTAL_VIEWS_KEY = 'totalViews';
  const TODAY_VIEWS_KEY = 'todayViews';
  const TODAY_DATE_KEY = 'todayDate';
  const LIKE_STATUS_KEY = 'likeStatus';
  const LIKES_KEY = 'likesCount';

  const todayDate = new Date().toISOString().split('T')[0];

  const [totalViews, setTotalViews] = useState(0);
  const [todayViews, setTodayViews] = useState(0);
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const storedTotalViews = localStorage.getItem(TOTAL_VIEWS_KEY) || 0;
    const storedTodayDate = localStorage.getItem(TODAY_DATE_KEY);
    let storedTodayViews = localStorage.getItem(TODAY_VIEWS_KEY) || 0;
    const storedLikesCount = localStorage.getItem(LIKES_KEY) || 0;
    const storedLikeStatus = localStorage.getItem(LIKE_STATUS_KEY) === 'true';

    if (storedTodayDate !== todayDate) {
      storedTodayViews = 0;
    }

    setTotalViews(parseInt(storedTotalViews));
    setTodayViews(parseInt(storedTodayViews));
    setLikesCount(parseInt(storedLikesCount));
    setIsLiked(storedLikeStatus);

    localStorage.setItem(TOTAL_VIEWS_KEY, parseInt(storedTotalViews) + 1);
    localStorage.setItem(TODAY_DATE_KEY, todayDate);
    localStorage.setItem(TODAY_VIEWS_KEY, parseInt(storedTodayViews) + 1);
  }, [todayDate]);

  const handleLikeButtonClick = () => {
    let newLikesCount = likesCount;
    const newIsLiked = !isLiked;

    if (newIsLiked) {
      newLikesCount += 1;
    } else {
      newLikesCount -= 1;
    }

    localStorage.setItem(LIKES_KEY, newLikesCount);
    localStorage.setItem(LIKE_STATUS_KEY, newIsLiked.toString());

    setLikesCount(newLikesCount);
    setIsLiked(newIsLiked);
  };
//   const handleResetButtonClick = () => {
    
//     localStorage.removeItem(TOTAL_VIEWS_KEY);
//     localStorage.removeItem(TODAY_VIEWS_KEY);
//     localStorage.removeItem(TODAY_DATE_KEY);
  
    
//     setTotalViews(0);
//     setTodayViews(0);
//   };

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className='viewport-main'>
        <div className='em'>
            <p >
              Total <span>{totalViews}</span>
            </p>
        </div>
        <div className='em'>
            <p>
              Today <span>{todayViews}</span>
            </p>
        </div>
        <div className='em'>
            <p>
              Like <span>{likesCount}</span>
            </p>
        </div>
        <div>
          <div className="heart-container" title="Like">
            <input 
              type="checkbox" 
              className="checkbox" 
              id="Give-It-An-Id" 
              checked={isLiked}
              onChange={handleLikeButtonClick}
            />
            <div className="svg-container">
                <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                </svg>
            </div>
          </div>
          {/* <button onClick={handleResetButtonClick}>reset</button> */}
        </div>
      </div>
    </Fade>
  );
}
