import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from '../components/header/Headers.jsx';
import Footer from '../components/footer/Footer.jsx';

const Home = () => {
  const [horseImages, setHorseImages] = useState([]);
  const [danceImages, setDanceImages] = useState([]);

  useEffect(() => {
    // Hämta hästbilder
    fetch('https://api.unsplash.com/photos/random?query=horse&count=3&client_id=KskWzvW414fiXTLDuI8evhu2N5DdnATSMHR_6tEGY3k')
      .then(response => response.json())
      .then(data => {
        const imageUrls = data.map(photo => photo.urls.regular);
        setHorseImages(imageUrls);
      })
      .catch(error => console.error(error));

    // Hämta dansande bilder
    fetch('https://api.unsplash.com/photos/random?query=dance&count=3&client_id=KskWzvW414fiXTLDuI8evhu2N5DdnATSMHR_6tEGY3k')
      .then(response => response.json())
      .then(data => {
        const imageUrls = data.map(photo => photo.urls.regular);
        setDanceImages(imageUrls);
      })
      .catch(error => console.error(error));

    // Scrolla till toppen när sidan laddas
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Headers />
      <main>
        <div className='wrapper'>
          <div className='carousel'>
            <Carousel>
              {horseImages.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={imageUrl} alt={`Horse Slide ${index}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className='btn'>
          <Link to="/4b" className="btn btn-primary">4B</Link>
          <Link to="/6b" className="btn btn-primary">6B</Link>
          <Link to="/Spanish" className="btn btn-primary">Spanska</Link>
          
          </div>

          <div className='carousel'>
            <Carousel>
              {danceImages.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={imageUrl} alt={`Dancing Slide ${index}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
         
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Headers from '../components/header/Headers.jsx';
// import Footer from '../components/footer/Footer.jsx';

// const Home = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetch('https://api.unsplash.com/photos/random?query=horse&count=3&client_id=KskWzvW414fiXTLDuI8evhu2N5DdnATSMHR_6tEGY3k')
//       .then(response => response.json())
//       .then(data => {
//         const imageUrls = data.map(photo => photo.urls.regular);
//         setImages(imageUrls);
//       })
//       .catch(error => console.error(error));

//     // Scrolla till toppen när sidan laddas
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <Headers />
//       <main>
//         <div className='wrapper'>
//           <div className='carousel'>
//             <Carousel>
//               {images.map((imageUrl, index) => (
//                 <Carousel.Item key={index}>
//                   <img className="d-block w-100" src={imageUrl} alt={`Slide ${index}`} />
//                 </Carousel.Item>
//               ))}
//             </Carousel>
//           </div>
//           <Link to="/quiz47" className="btn btn-primary">Glosor 6B</Link>
//           <Link to="/quiz46" className="btn btn-primary">Glosor 4B</Link>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default Home;
