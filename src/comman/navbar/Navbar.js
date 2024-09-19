import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import "../styles/navbar.css"
import "../Styles/allStyles.css"
import { FaSearch } from 'react-icons/fa'; // Import the search icon

const Navbar = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

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

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="search-container">
          <input
            className={`search-input ${isSearchOpen ? 'show' : ''}`}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="search-icon" onClick={toggleSearch}>
            <FaSearch />
          </button>
        </div>
        <div className="logo">
          <Link to="/">YourLogo</Link>
        </div>
        <button className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'show' : 'hide'}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          {/* <Link to="/services" onClick={toggleMenu}>Services</Link>
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link> */}
        </nav>
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