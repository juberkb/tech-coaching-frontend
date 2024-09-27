<div className="dropdown">
<div
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
>
<Link to="/">
<span className="nav-item">
Home <RiArrowDownSLine />
</span>
</Link>
{isDropdownOpen && (
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
  <img src={navImage} alt='navbar image' />
</div>
</div>
)}
</div>
</div>




