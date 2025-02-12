import React, { useState } from 'react'
import "../Css/Project.css"
import { AiOutlineEllipsis } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { MdLiveTv } from 'react-icons/md'


const Project = () => {

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  return (
    <div className="project" id='Project'>
      <h1>My Creative <span class="highlight">Portfolio</span> Section</h1>
      <div className='project-cover'>
        <div>
          <div class="project-card">
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1739009395/lululemon_xxjbco.png" alt="Project Preview" />
            <div class="overlay">
              <a href="https://lululemon-project-ce6i.vercel.app/" class="icon" title="Live Demo" target="_blank" rel="noopener noreferrer">
                <MdLiveTv size={25} />
              </a>
              <a href="https://github.com/Ekthasurya/Lululemon-clone" class="icon" title="GitHub" target="_blank" rel="noopener noreferrer" >
                <FaGithub size={25} />
              </a>
              {/* <button className="icon" title="Details" onClick={() => setShowModal1(true)}>
                <AiOutlineEllipsis size={25} />
              </button> */}
            </div>
            <h3>Lululemon Clone</h3>
            <p>Lululemon Clone is a frontend e-commerce website that replicates the shopping
               experience of Lululemon. Built with React, it features a responsive UI, product listings,
                filtering options, a shopping cart for an enhanced user experience.</p>

          </div>


          {showModal1 && (
            <div className="modal-overlay">
              <div className="modal">
                <p>Lululemon Clone Project is a responsive eCommerce website built with React, Redux, and CSS, featuring product listings, filtering, and a seamless user experience.</p>
                <p><strong>Features:</strong>Responsive Design,Product Listing,Filtering & Sorting,Add to Cart</p>
                <p><strong>Tech Stack:</strong> React, CSS</p>
                <button className="close-btn" onClick={() => setShowModal1(false)}>Close</button>
              </div>
            </div>
          )}



        </div>

        <div>
          <div class="project-card">
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1739009414/Groupon_tizvng.png" alt="Project Preview" />
            <div class="overlay">
              <a href="https://groupon-clone-ub7m.vercel.app/" class="icon" title="Live Demo" target="_blank" rel="noopener noreferrer">
                <MdLiveTv size={25} />
              </a>
              <a href="https://github.com/Ekthasurya/Groupon-clone" class="icon" title="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} />
              </a>
              {/* <button className="icon" title="Details" onClick={() => setShowModal2(true)}>
                <AiOutlineEllipsis size={25} />
              </button> */}
            </div>
            <h3>Groupon Clone</h3>
            <p>Groupon Clone is a full-stack web application that replicates the functionality of Groupon,
               allowing users to browse daily deals and manage their orders. Built with React, Node.js, and MongoDB,
               it features a responsive UI, secure authentication, and a REST API for seamless user experience.</p>
          </div>
          {showModal2 && (
            <div className="modal-overlay">
              <div className="modal">
                <p>Groupon Clone is a responsive deal-sharing platform built with React, featuring dynamic discounts, category-based filtering, and a seamless user experience.</p>
                <p><strong>Features:</strong>Responsive Design,Product Listing,Filtering & Sorting,Add to Cart</p>
                <p><strong>Tech Stack:</strong> React, CSS, React Router,Node.js, Express,MongoDB</p>
                <button className="close-btn" onClick={() => setShowModal2(false)}>Close</button>
              </div>
            </div>
          )}

        </div>

        <div>
          <div class="project-card">
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1739009356/Relience_lwt8zn.png" alt="Project Preview" />
            <div class="overlay">
              <a href="https://reliance-clone-l92m.vercel.app/" class="icon" title="Live Demo" target="_blank" rel="noopener noreferrer">
                <MdLiveTv size={25} />
              </a>
              <a href="https://github.com/Ekthasurya/Reliance-clone" class="icon" title="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} />
              </a>
              {/* <button className="icon" title="Details" onClick={() => setShowModal3(true)}>
                <AiOutlineEllipsis size={25} />
              </button> */}
            </div>
            <h3>Reliance Clone</h3>
            <p>This is a full-stack project that mimics the features of the Reliance e-commerce website.
               The project is built with React for the front-end and Node.js with Express for the back-end.
                It features user authentication, product management, and a shopping cart, offering a complete e-commerce experience.</p>
          </div>
          {showModal3 && (
            <div className="modal-overlay">
              <div className="modal">
                <p>Reliance Clone is a responsive eCommerce platform built with React, featuring product listings, category-based filtering, and a seamless shopping experience.</p>
                <p><strong>Features:</strong> Responsive Design,Product Listing,Filtering & Sorting,Add to Cart,Authentication</p>
                <p><strong>Tech Stack:</strong>React, CSS, React Router,Node.js, Express,MongoDB</p>
                <button className="close-btn" onClick={() => setShowModal3(false)}>Close</button>
              </div>
            </div>
          )}

        </div>
        <div className='last'>
          <div class="project-card">
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1739009372/Matha_Buru_wzr7zv.png" alt="Project Preview" />
            <div class="overlay">
              <a href="https://www.mathaburu.com/" class="icon" title="Live Demo" target="_blank" rel="noopener noreferrer">
                <MdLiveTv size={25} />
              </a>
              <a href="https://github.com/Ekthasurya/Mathaburu" class="icon" title="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} />
              </a>
              {/* <button className="icon" title="Details" onClick={() => setShowModal4(true)}>
                <AiOutlineEllipsis size={25} />
              </button> */}
            </div>
            <h3>Matha Buru Resort</h3>
            <p>Mathaburu Resort is a frontend website designed to showcase a scenic resort experience. Built with React, it features a responsive UI, room listings, an online booking form, an interactive gallery, and a contact page for seamless user interaction.</p>
          </div>
          {showModal4 && (
            <div className="modal-overlay">
              <div className="modal">
                <p>Mathaburu is a responsive resort website showcasing scenic locations, accommodations  for a seamless travel experience.</p>
                <p><strong>Features:</strong> Responsive Design,Accommodation Details,Contact & Inquiry Form,Interactive Map</p>
                <p><strong>Tech Stack:</strong> React, CSS</p>
                <button className="close-btn" onClick={() => setShowModal4(false)}>Close</button>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  )
}

export default Project