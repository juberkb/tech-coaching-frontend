import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import navImage from "../../assets/mega-menu-image.webp"
import "../navbar/navbar.css";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import webLogo from "../../assets/logo-dark.png";
import Button from '../../components/button/Button';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const query = e.target.value.toLowerCase();
    const filtered = data.filter(item => item.name.toLowerCase().includes(query));
    setFilteredData(filtered);
  };

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(prevState => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };

  return (
    <header className="navbar ">
      <div className="navbar-container">
        <div className="logo">
          <img src={webLogo} alt="EduBlink" width="100%" />
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <div className="dropdown">
            <Link to="/" onClick={() => toggleDropdown('home')}>
              <span>Home <RiArrowDownSLine style={{ marginLeft: ".5rem" }} /></span>
            </Link>
            {isDropdownOpen.home && (
              <div className="dropdown-menu multi-column"  >
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
                  <img src={navImage} alt='navbar  image' />
                </div>
              </div>
            )}
          </div>
          <div className="dropdown">
            <Link to="/" onClick={() => toggleDropdown('home')}>
              <span>Pages <RiArrowDownSLine style={{ marginLeft: ".5rem" }} /></span>
            </Link>
            {isDropdownOpen.home && (
              <div className="dropdown-menu multi-column">
                <div className="column">
                  <ul>
                    <li><Link to="/abouUs">About Us</Link></li>
                    <li><Link to="/distant-learning">Instructors</Link></li>
                    <li><Link to="/university">Event Pages</Link></li>
                    <li><Link to="/online-academy">Shop pages</Link></li>
                    <li><Link to="/online-academy">Comming Soon</Link></li>

                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="dropdown">
            <Link to="/courses" onClick={() => toggleDropdown('home')}>
              <span>Courses</span>
            </Link>
              </div>
      
              <div className="dropdown">
            <Link to="/blogs" onClick={() => toggleDropdown('home')}>
              <span>Blogs </span>
            </Link>
              </div>

              <div className="dropdown">
            <Link to="/contactUs" onClick={() => toggleDropdown('home')}>
              <span>Contact <RiArrowDownSLine style={{ marginLeft: ".5rem" }} /></span>
            </Link>
            {isDropdownOpen.home && (
              <div className="dropdown-menu multi-column">
                <div className="column">
                  <ul>
                    <li><Link to="/edublink-education">Contact Us</Link></li>
                    <li><Link to="/distant-learning">Contact Ne</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Search & Cart */}
        <div className="search-container">
          <button className="search-icon" onClick={toggleSearch} style={{ marginRight: "2rem" }}>
            <CiSearch color='black' fontSize="1.8rem " />
          </button>
          <button className="chat-icon" style={{ marginRight: "3rem" }}>
            <PiShoppingCartThin color='black' fontSize="1.8rem" />
          </button>
          <Button
            label="Find Courses"
            fontWeight="normal"
            icon={<FiArrowRight />}
          />
        </div>
      </div>
      <button className={`menu-button ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      {/* Search Results */}
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