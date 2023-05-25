import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
// const styles = {
//   card: {
//     margin: 20,
//     background: '#e8eaf6',
//   },
//   heading: {
//     background: '#9a74db',
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: '1.2rem',
//     color: 'white',
//     padding: '0 20px',
//   },
// };

// In Navbar, we can assign a style from an object by using curly braces
function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar bg-one">
      <div className="container">
        <a className="navbar-brand" href='#'><img src="./rmaya.png" alt="Bootstrap" width="30" height="24"></img></a>

        <ul className="nav d-flex">
          <li className="nav-item">
            <a className={currentPage === 'Home' ? 'nav-link active' : 'nav-link text-light'} onClick={() => handlePageChange('Home')} href='#Home'>Home</a>
          </li>
          <li className="nav-item">
            <a className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link text-light'} onClick={() => handlePageChange('Projects')} href='#projects'>Projects</a>
          </li>
          <li className="nav-item">
            <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link text-light'} onClick={() => handlePageChange('About')} href='#about'>About</a>
          </li>
          <li className="nav-item">
            <a className={currentPage === 'Connect' ? 'nav-link active' : 'nav-link text-light'} onClick={() => handlePageChange('Connect')} href='#connect'>Connect</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
