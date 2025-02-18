import React, { useEffect, useState } from 'react'
import "../Css/Home.css"


const Home = () => {
  
    const roles = [' MERN Developer !!', ' Problem Solver', ' Continuous Lerner !!', ' Passionate Coder'];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[index];

    if (isDeleting) {
      // Deleting text
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), 100);
      } else {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % roles.length); // Move to next role
      }
    } else {
      // Typing text
      if (charIndex < currentRole.length) {
        setTimeout(() => setCharIndex(charIndex + 1), 150);
      } else {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      }
    }

    setText(currentRole.substring(0, charIndex));
  }, [charIndex, isDeleting, index, roles]);

  return (
    <div  className="home" id='Home'>
       <div className='card-home'>
       <h2>Hello, my name </h2>
       <h1>Surya Kiran Majhi</h1>
      <p className='change-text'>
        I am a <span className="typing-text">{text}</span>
        <span className="cursor">|</span>
      </p>
      <a href="/SuryaKiranMajhi-FullStackWebDeveloper-2oej.pdf" download target="_blank" rel="noopener noreferrer"><button class="square-btn">Resume</button></a>
       </div>
       <div className='card-photo'>
       <img 
        src="https://res.cloudinary.com/dhd5do52g/image/upload/v1738261728/IMG_20240801_120024_w4gsyg.jpg" 
        alt="Profile" 
        className="profile-photo"
      />
    </div>
    </div>
  )
}

export default Home