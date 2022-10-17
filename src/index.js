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
  <div className='main'>
    <Profile
      title="Elon Musk"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
      text="Musk was born and grew up in Pretoria, South Africa. He attended the University of Pretoria before moving to Canada at age 17, acquiring citizenship through his Canadian-born mother. Two years later, he matriculated at Queen's University (Ontario) and transferred to the University of Pennsylvania, where he received bachelor's degrees in economics and physics. He moved to California in 1995 to attend Stanford University but decided to instead pursue a business career, co-founding the web software company Zip2 with his brother, Kimbal. The startup was acquired by Compaq for $307 million in 1999. The same year, Musk co-founded the online bank X.com, which merged with Confinity in 2000 to form PayPal. eBay bought PayPal in 2002 for $1.5 billion."
      />
    
    
     <Profile
      title="Bill Gates"
      text="Gates was born and raised in Seattle, Washington. In 1975, he and Allen founded Microsoft in Albuquerque, New Mexico. It became the world's largest personal computer software company.[5][a] Gates led the company as chairman and CEO until stepping down as CEO in January 2000, succeeded by Steve Ballmer, but he remained chairman of the board of directors and became chief software architect.[8] During the late 1990s, he was criticized for his business tactics, which have been considered anti-competitive. This opinion has been upheld by numerous court rulings.[9] In June 2008, Gates transitioned to a part-time role at Microsoft and full-time work at the Bill & Melinda Gates Foundation, the private charitable foundation he and his then-wife, Melinda Gates, established in 2000.[10] He stepped down as chairman of the board of Microsoft in February 2014 and assumed a new post as technology adviser to support the newly appointed CEO Satya Nadella.[11] In March 2020, Gates left his board positions at Microsoft and Berkshire Hathaway to focus on his philanthropic efforts on climate change, global health and development, and education.[12]."
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/220px-Bill_Gates_2017_%28cropped%29.jpg"
    />
    <Profile
      title="jeff Bezos"
      text="Jeffrey Preston Bezos (/ˈbeɪzoʊs/ BAY-zohss;[2] né Jorgensen; born January 12, 1964) is an American entrepreneur, media proprietor, investor, computer engineer, and commercial astronaut.[3][4] He is the founder, executive chairman, and former president and CEO of Amazon. With a net worth of around US$139 billion as of October 2022, Bezos is the third-wealthiest person in the world and was the wealthiest from 2017 to 2021 according to both Bloomberg's Billionaires Index and Forbes.[5][6]"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/220px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg"
    />
  </div>
)


ReactDOM.render(<Page />, document.querySelector("#root"));
