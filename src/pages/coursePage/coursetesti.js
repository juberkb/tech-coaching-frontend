
import '../coursePage/courses.css'
// import Button from "../../ReuableComponents/Buttons";
import CustomCards from '../../components/cards/CustomCards';
import Courseimage1 from '../../assets/course-09-590x430.jpg';
import Courseimage2 from '../../assets/course-12-590x430.jpg';
import Courseimage3 from '../../assets/course-40-590x430.jpg';
import Courseimage4 from '../../assets/course-img-1.jpg';
import Courseimage5 from '../../assets/course-img-2.jpg';
import Courseimage6 from '../../assets/course-img-3.jpg';


function Courses() {

     const cards = [
       {
      image: Courseimage1,
      title: 'Front-End Development',
      content: 'What I Offer:',
        reviewJ: 'User Interface (UI) Design' ,
               reviewU: 'Responsive Design' ,
                reviewB: 'Interactive Elements' ,
                 reviewE: 'Cross-Browser Compatibility' ,
                  reviewR: 'Accessibility' ,

    },
    {
      image:Courseimage2,
      title: 'ReactNative Development',
     content: 'What I Offer:',
        reviewJ: 'Cross-Platform Mobile App Development' ,
               reviewU: 'UI/UX Design' ,
                reviewB: 'Custom App Development' ,
                 reviewE: 'Integration with Backend Services' ,
                  reviewR: 'App Store Deployment' ,
    },
    {
      image: Courseimage3,
      title: 'MERN-STACK Development',
             content: 'What I Offer:',
        reviewJ: 'Full-Stack Web Development' ,
               reviewU: 'Database Design and Implementation' ,
                reviewB: 'RESTful API Development' ,
                 reviewE: 'User Authentication and Authorization' ,
                  reviewR: 'Real-Time Functionality' ,
    },
     {
      image: Courseimage4,
      title: 'Quality Analysis',
     content: 'What I Offer:',
        reviewJ: 'Test Case Design' ,
               reviewU: 'Test Automation' ,
                reviewB: 'Manual Testing' ,
                 reviewE: 'Regression Testing' ,
                  reviewR: 'Accessibility Testing' ,
    },
    {
        image:  {
      image: Courseimage5,
      title: 'Quality Analysis',
     content: 'What I Offer:',
        reviewJ: 'Test Case Design' ,
               reviewU: 'Test Automation' ,
                reviewB: 'Manual Testing' ,
                 reviewE: 'Regression Testing' ,
                  reviewR: 'Accessibility Testing' ,
    }
      },
      {
        image:  {
      image: Courseimage6,
      title: 'Quality Analysis',
     content: 'What I Offer:',
        reviewJ: 'Test Case Design' ,
               reviewU: 'Test Automation' ,
                reviewB: 'Manual Testing' ,
                 reviewE: 'Regression Testing' ,
                  reviewR: 'Accessibility Testing' ,
    }
      },
  ];




    return ( 
      <div className="container">
        <div className="CustomCardsPage">
    
      <h2 className="CustomCardsHeading">Hire Me For</h2>
  
  <div className="CustomCardsContainer">

<div className="CustomCardsSubContainer1">
           
             <div className="CustomCardsTextContainer">
             <h3 className="gradient-text">Your company, my exceptional expertise.</h3>
             <h6 className="gradient-text2">If you are looking for an agency to help you create a remarkable presence online, you`ve come to the right place. We can help you take your business to the next level.</h6>
         
 
          
                  </div>
</div>

<div className="CustomCardsSubContainer2">

   <div className="cards-container">
      <div className="textColumn">
        <h2 className="text-column1">what are we offering ...</h2>
        <span className="text-column2">Contact Me For</span><br/><br/>
         <span className="text-column2">Slide to know more...</span>
      </div>
      
      
      <div className="cards-row"> 
 
        {cards.map((card, index) => (
          <CustomCards
            key={index}
            imageSrc={card.image}
            title={card.title}
            content={card.content}
             reviewJ={card.reviewJ}
             reviewU={card.reviewU}
             reviewB={card.reviewB}
             reviewE={card.reviewE}
             reviewR={card.reviewR}
        
           />
        ))}
      </div>
    </div>

</div>
</div>
</div>
</div>
     );
}

export default Courses;