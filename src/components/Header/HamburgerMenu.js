// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import './_Hamburger.scss';

// const HamburgerMenu = () => {
//   //conditionally render for login or logout button here
//   const [isActive, setIsActive] = useState(false);

//   const onClick = () => setIsActive(!isActive)

//   return(
//     <nav>
//       <img src={hamburger} alt='navigation' className='hamburger' onClick={onClick} />

//       {isActive &&
//         <div className='menuOptions'>
//           <ul className="menu">
//             <li><Link to='/'>Home</Link></li>
//             <li><Link to='/login'>Logout</Link></li>
//           </ul>
//         </div>
//       }
//     </nav>
//   )
// }

// //is this accessible?
// export default HamburgerMenu;
