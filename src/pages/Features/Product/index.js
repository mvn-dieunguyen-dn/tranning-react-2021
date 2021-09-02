import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux'
import { toggle } from '../../../store/favSlice';

const Product = () => {
  const dispatch = useDispatch()

  const [prd, setPrd] = useState([
    {
      id: 1,
      fav: false,
    },
    {
      id: 2,
      fav: false,
    },
    {
      id: 3,
      fav: false,
    },
    {
      id: 4,
      fav: false,
    },
    {
      id: 5 ,
      fav: false,
    }
  ]);

  const handleFavorite = (e, id) => {
    e.preventDefault()
    const newPrd = prd.map(e => {
      if (e.id === id) {
        e.fav = !e.fav
      }
      return e;
    })
    setPrd(newPrd)
    dispatch(toggle(id))
  }

  return (
    <>
      <section className="section-product">
        <div className="container">
           <ul className="prd-list row">
             {
               prd.map((e) => (
                 <li key={e.id} className="prd-item col-medium-3">
                   <a href="/" className="prd-img">
                     <img src="https://billboardvn.vn/wp-content/uploads/2020/05/blackpink_lisa_20m_followers1.jpg" alt="img" />
                     <h4 className="prd-link">Product {e.id}</h4>
                     <span className={e.fav ? 'active': ''} onClick={ (event) => handleFavorite(event, e.id) }><FaHeart /></span>
                   </a>
                   <button className="prd-action">Add to cart</button>
                 </li>
               ))
             }
           </ul>
         </div>
       </section>
    </>
  );
}

export default Product;