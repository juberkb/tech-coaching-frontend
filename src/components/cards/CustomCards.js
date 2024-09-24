import React from 'react';
import '../cards/customcards.css'

function CustomCards({imageSrc, title, content, reviewJ, reviewU, reviewB, reviewE, reviewR, }) {
    return ( 
   <div className="cards">
      <div className="cards-inner">
     
        <div className="cards-front">
         <img src={imageSrc} alt="Cards" className='imgHireMe' />
          <h2 className='titleCards'>{title}</h2>
        </div>
      <div className="cards-back">
        
        <p className='CardContent'>  {content}</p>
       
           <ul>
           <li>{reviewJ}</li>
           <li>{reviewU}</li>
           <li>{reviewB}</li>
           <li>{reviewE}</li>
           <li>{reviewR}</li>
           </ul>
        
        </div>
      </div>
    </div>
  );
};

export default CustomCards;