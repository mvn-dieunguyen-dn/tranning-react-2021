import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux'
import { toggle } from '../../../store/favSlice';
import banner from './banner.png';
import banner2 from './banner2.png';

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
    <section className="section-course">
        <div className="container">
            {/* <div className="course-main">
              <p>Our Education, University, Learning System Demos</p>
            </div> */}
          <div>
          <img src={banner} alt="image" />
          <img src={banner2} alt="image" />

          </div>
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
