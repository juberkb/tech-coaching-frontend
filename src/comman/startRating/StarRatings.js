import React,{useState, useRef} from 'react';
import"./starRating.css"

function StarRatings() {
     // starRating
  const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
   // starRating

    return ( 
        <>
             <div className="star-rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={index <= rating ? 'star filled' : 'star'}
          onClick={() => handleRatingChange(index)}
        >
          &#9733;
        </span>
      ))}
    </div>
        </>
     );
}

export default StarRatings;