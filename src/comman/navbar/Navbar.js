import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import 'animate.css';
import navImage from "../../assets/mega-menu-image.webp";
import "../navbar/navbar.css";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import webLogo from "../../assets/logo-dark.png";

const Navbar = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    home: false,
    services: false,
    about: false,
    contact: false
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(prevState => {
      const newState = {
        home: false,
        services: false,
        about: false,
        contact: false
      };
      newState[menu] = !prevState[menu]; // Toggle the selected dropdown
      return newState;
    });
  };

  const handleEnquiryNowClick = () => {
    navigate('/contactUs'); // Change to your Contact Us route
  };
  
  return (
    <header className="navbar" style={{ width: "100%", overflow: "hidden" }}>
      <div className="navbar-container">
        <div className='logo-menu-row'>
          <div className="logo">
            <img src={webLogo} alt="EduBlink" className='nav bar logo' />
          </div>
          <button className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
          </button>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <div className="dropdown">
            <Link to="/" onClick={() => toggleDropdown('home')}>
              <span className="nav-item">Home <RiArrowDownSLine className='nav-item-icon'/></span>
            </Link>
            {isDropdownOpen.home && (
              <div className="dropdown-menu multi-column">
                <div className="column">
                  <ul>
                    <li><Link to="/edublink-education">EduBlink Education</Link></li>
                    <li><Link to="/distant-learning">Distant Learning</Link></li>
                    <li><Link to="/university">University</Link></li>
                    <li><Link to="/online-academy">Online Academy</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li><Link to="/remote-training">Remote Training</Link></li>
                    <li><Link to="/business-coach">Business Coach</Link></li>
                    <li><Link to="/motivation">Motivation</Link></li>
                    <li><Link to="/programming">Programming</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <img src={navImage} alt='navbars navlink third column' />
                </div>
              </div>
            )}
          </div>

          <div className="dropdown">
            <Link to="#" onClick={() => toggleDropdown('pages')}>
              <span className="nav-item">Pages <RiArrowDownSLine className='nav-item-icon'/></span>
            </Link>
            {isDropdownOpen.pages && (
              <div className="dropdown-menu multi-column">
                <div className="column">
                  <ul>
                    <li><Link to="/aboutUs">About Us</Link></li>
                    <li><Link to="/instructors">Instructors</Link></li>
                    <li><Link to="/event-pages">Event Pages</Link></li>
                    <li><Link to="/shop-pages">Shop Pages</Link></li>
                    <li><Link to="/coming-soon">Coming Soon</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <Link to="/courses" className="nav-item">Courses</Link>
          <Link to="/blogs" className="nav-item">Blogs</Link>
          <Link to="/contactUs" className="nav-item">Contact</Link>
        </nav>

        <div className="search-container">
          <button className="search-icon" onClick={toggleSearch} style={{ marginRight: "2rem" }}>
            <CiSearch color='black' fontSize="1.8rem " />
          </button>
          <button className="navSingleChartButton" style={{ marginRight: "3rem" }}>
            <PiShoppingCartThin color='black' fontSize="1.8rem" />
          </button>
          {/* Updated button here */}
          <button className="navSingleButton" onClick={handleEnquiryNowClick}>
            <span className="nav-item">Enquiry Now <FiArrowRight /></span>
          </button>
        </div>
      </div>

      {isSearchOpen && searchQuery && (
        <div className="search-results">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <Link key={index} to={item.link} className="search-result-item" onClick={() => setIsSearchOpen(false)}>
                {item.name}
              </Link>
            ))
          ) : (
            <p className="no-results">No results found</p>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
