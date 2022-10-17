import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"


const Profile = ({ title, image, text }) => (
  <div className="profile">
    
    <h1 className='title'> {title} </h1>
    <div className="imageDiv">
      <img className='image' src={image} alt="placeholder" />
    </div>
    <p className='text'> {text} </p>

  </div>
)


const Page = () => (
  <div>
    <Profile
      title="Elon Musk"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
      text="Musk was born and grew up in Pretoria, South Africa. He attended the University of Pretoria before moving to Canada at age 17, acquiring citizenship through his Canadian-born mother. Two years later, he matriculated at Queen's University (Ontario) and transferred to the University of Pennsylvania, where he received bachelor's degrees in economics and physics. He moved to California in 1995 to attend Stanford University but decided to instead pursue a business career, co-founding the web software company Zip2 with his brother, Kimbal. The startup was acquired by Compaq for $307 million in 1999. The same year, Musk co-founded the online bank X.com, which merged with Confinity in 2000 to form PayPal. eBay bought PayPal in 2002 for $1.5 billion."
      />
    
    
    {/* <Profile
      title="Winning the Best Music Director Award"
      text="The Filmfare Awards are recognised as India’s foremost awards and one of the oldest awards for Bollywood movies, presented on a yearly basis by The Times Group. Originally named the Clare Awards after The Times of India film critic Clare Mendonca. The first event held on March 21, 1954 gave out only five awards. Best Film Award was won by Do Bigha Zameen (1953), which also won its director Bimal Roy the Best Director Award. Dilip Kumar won for his acting in Daag (1952) while Meena Kumari won Best Actor (Female) for Baiju Bawra (1952). Naushad Ali’s music for Baiju Bawra won him the Best Music Director Award. These winners were selected by polling readers of the Filmfare magazine."
      image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
    />
    <Profile
      title="best drama Awards"
      text="The Filmfare Awards are recognised as India’s foremost awards and one of the oldest awards for Bollywood movies, presented on a yearly basis by The Times Group. Originally named the Clare Awards after The Times of India film critic Clare Mendonca. The first event held on March 21, 1954 gave out only five awards. Best Film Award was won by Do Bigha Zameen (1953), which also won its director Bimal Roy the Best Director Award. Dilip Kumar won for his acting in Daag (1952) while Meena Kumari won Best Actor (Female) for Baiju Bawra (1952). Naushad Ali’s music for Baiju Bawra won him the Best Music Director Award. These winners were selected by polling readers of the Filmfare magazine."
      image="https://images.squarespace-cdn.com/content/v1/5b398fb2f793925040070b55/1569358740365-XHKY3VFY8H86Q130T9MP/performers+on+stage?format=1000w"
    /> */}
  </div>
)


ReactDOM.render(<Page />, document.querySelector("#root"));
