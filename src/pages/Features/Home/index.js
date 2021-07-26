import React from 'react';
import HeroBanner from '../../../components/HeroBanner/index';

function Home(props) {
  return (
    <div>
      <HeroBanner />
      <h3>This is Home page</h3>
    </div>
  );
}

export default Home;

// import React from 'react';
// import HeroBanner from '../../../components/HeroBanner/index';

// function Home(props) {
//   const prd = [1,2,3,4]
//   return (
//     <>
//       <HeroBanner />
//       <h3>This is Home page</h3>
//       {/* <section className="section-product">
//         <div className="container">
//           <ul className="prd-list row">
//             {
//               prd.map((e, index) => (
//                 <li key={index} className="prd-item col-medium-3">
//                   <a href="/" className="prd-img">
//                     <img src="https://billboardvn.vn/wp-content/uploads/2020/05/blackpink_lisa_20m_followers1.jpg" alt="img" />
//                     <h4 className="prd-link">Product {e}</h4>
//                   </a>
//                   <button className="prd-action">Add to cart</button>
//                 </li>
//               ))
//             }
//           </ul>
//         </div>
//       </section> */}
//     </>
//   );
// }

// export default Home;
