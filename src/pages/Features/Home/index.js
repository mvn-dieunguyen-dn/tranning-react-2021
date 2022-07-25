import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { toggle } from '../../../store/favSlice';
import be from './be.jpg';
import { Col, Row } from 'antd';
import "antd/dist/antd.css";
import './style.scss'


function Home(props) {
  const dispatch = useDispatch()

  const [courses, setCourse] = useState([
    {
      id: 1,
      name: 'Writing',
      img: 'http://theme-stall.com/edupress/upload/live_04.jpg',
      fav: false,
    },
    {
      id: 2,
      name: 'Reading',
      img: 'http://theme-stall.com/edupress/upload/live_05.jpg',
      fav: false,
    },
    {
      id: 3,
      name: 'Speaking',
      img: 'http://theme-stall.com/edupress/upload/live_02.jpg',
      fav: false,
    },
    {
      id: 4,
      name: 'Listening',
      img: 'http://theme-stall.com/edupress/upload/live_03.jpg',
      fav: false,
    },
    {
      id: 5,
      name: 'Four skills',
      img: 'http://theme-stall.com/edupress/upload/live_06.jpg',
      fav: false,
    },
    {
      id: 6,
      name: 'Two optional skills',
      img: 'http://theme-stall.com/edupress/upload/live_08.jpg',
      fav: false,
    },
    {
      id: 7,
      name: 'Two optional skills',
      img: 'http://theme-stall.com/edupress/upload/live_09.jpg',
      fav: false,
    },
    {
      id: 8,
      name: 'Two optional skills',
      img: 'http://theme-stall.com/edupress/upload/live_10.jpg',
      fav: false,
    }
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

  return (
    <section>
        <div className="container">
            {/* <div className="course-main">
              <p>Our Education, University, Learning System Demos</p>
            </div> */}
          <Row className='main-content'>
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
          </Row>
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
