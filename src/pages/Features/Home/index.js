import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { toggle } from '../../../store/favSlice';
// import be from './be.jpg';
import './style.scss'
import Slider from "react-slick";
import Img1 from "./1.jpeg";
import Img2 from "./2.jpeg";
import Img3 from "./3.jpeg";
import Img4 from "./4.jpeg";
import banner from "./banner.png";
import banner2 from "./banner2.png";

function Home(props) {
  const dispatch = useDispatch()

  const [courses, setCourse] = useState([
    {
      id: 1,
      img: Img1,
    },
    {
      id: 2,
      img: Img2,
    },
    {
      id: 3,
      img: Img3,
    },
    {
      id: 4,
      img: Img4,
    },
  ]);

  const handleFavorite = (e, id) => {
    e.preventDefault()
    const newCourse = courses.map(e => {
      if (e.id === id) {
        e.fav = !e.fav
      }
      return e;
    })
    setCourse(newCourse)
    dispatch(toggle(id))
  }

  const Logos = ({ title, img, img2, img3, key }) => {
    return (
      <><img src={img} alt={img.alt} /></>
    );
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section>
        <div>
            {/* <div className="course-main">
              <p>Our Education, University, Learning System Demos</p>
            </div> */}
          {/* <Row className='main-content'>
            <div className='content'>
              <p>- Link Vocal C1</p>
              <a href='https://www.toe.gr/pluginfile.php?file=%2F2143%2Fmod_resource%2Fcontent%2F1%2FLevel%20C1%20Word%20List.pdf' target="_blank">
                https://www.toe.gr/pluginfile.php?file=%2F2143%2Fmod_resource%2Fcontent%2F1%2FLevel%20C1%20Word%20List.pdf
              </a>
            </div>
            <Col md={12} xs={24}>
              <img src={be} alt="image" />
            </Col>
            <Col md={12} xs={24}>
              <div className='content-right'>
                <h2 className='ma-10 '>IELTS NHÀN LÊ</h2>Ielts Teacher
                <p>( 8.0 Overall, 8.0 Writing)</p>
                <p>Offer English courses for all levels</p>
                <p>Phone/Zalo: 032.963.4383</p>
              </div>
            </Col>
          </Row> */}
          {/* <Slider {...settings}>
            <div>
              <img src={banner} />
            </div>
            <div>
              <img src={banner2} />
            </div>
          </Slider> */}
          <div className='container'>
            <div className='content'>
                <p>- Link Vocal C1</p>
                <a href='https://www.toe.gr/pluginfile.php?file=%2F2143%2Fmod_resource%2Fcontent%2F1%2FLevel%20C1%20Word%20List.pdf' target="_blank">
                  https://www.toe.gr/pluginfile.php?file=%2F2143%2Fmod_resource%2Fcontent%2F1%2FLevel%20C1%20Word%20List.pdf
                </a>
                <p>- Tài liệu Nghe chép chính tả Section 1+2 có đáp án - Vocabulary List C1+C2</p>
                <a href='https://drive.google.com/drive/folders/1fO3PGkdBDie49E5DbEd8NyfHwYJo4_3g?fbclid=IwAR3-G3owUy6hehM5L0MQudeSUFUs__BI24nbF3HUDiIm0Jh4aahw1r9TyE8' target="_blank">
                  https://drive.google.com/drive/folders/1fO3PGkdBDie49E5DbEd8NyfHwYJo4_3g?fbclid=IwAR3-G3owUy6hehM5L0MQudeSUFUs__BI24nbF3HUDiIm0Jh4aahw1r9TyE8
                </a>
                <p>- Sách Speaking</p>
                <a href='https://drive.google.com/drive/folders/1JJFfPb7YSs-3ZWmdPNOsEZ00338-NS68?fbclid=IwAR24JHZn7Gl6-RJw5P4-6Vo3zx72QYUrxM6Fqy0LV-tNtkEtfnJ-T4H-_U4' target="_blank">
                  https://drive.google.com/drive/folders/1JJFfPb7YSs-3ZWmdPNOsEZ00338-NS68?fbclid=IwAR24JHZn7Gl6-RJw5P4-6Vo3zx72QYUrxM6Fqy0LV-tNtkEtfnJ-T4H-_U4
                </a>
                <p className='text-center'>Still updating...</p>
              </div>
          </div>
          {/* <div>
            <img src={banner} alt="image" />
            <img src={banner2} alt="image" />

          </div> */}
           {/* <ul className="course-list row">
             
             {
               courses.map((e) => (
                 <div key={e.id} className="col-medium-4">
                   <div className="course-item">
                      <li>
                        <a href="/">
                          <Logos img={e.img} />
                          <div className="course-detail">
                            <a href="/" className="course-title">{ e.name }</a>
                            <span className={e.fav ? 'active': ''} onClick={ (event) => handleFavorite(event, e.id) }><FaCartPlus /></span>
                          </div>
                        </a>
                      </li>
                   </div>
                 </div>
               ))
             }
           </ul> */}
         </div>
       </section>
  );
}

export default Home;
