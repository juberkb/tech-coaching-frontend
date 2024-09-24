// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./comman/navbar/Navbar.js"
import Footer from "./comman/footer/Footer.js"
import Home from "./pages/home/Home.js"
import { ChakraProvider } from '@chakra-ui/react';
import AboutPage from './pages/about/About.js';
import Courses from "./pages/coursePage/Courses.js"
import BlogPage from './pages/blog/Blog.js';
import ContactUs from './pages/contact/Contact.js';
// import Home from './HeroSections/Home.js';
// import Navbar from './HeroSections/Navbar.js';
// import Footer from './HeroSections/Footer.js';

// import About from './components/About.js';
// import Service from './components/Service.js';
// import Contact from './components/Contact.js';
// import News from './components/News.js';
// import Testimonials from './components/Testinomials.js';
// import Blogs from './components/Blogs.js';
// import PrivacyPolicy from './components/PrivacyPolicy.js';
// import TermsService from './components/TermsService.js';

function App() {
  const data = [
    { name: 'Home', link: '/' },
        { name: 'About Us', link: '/aboutUs' },
        { name: 'Courses', link: '/courses' },
        { name: 'Blog page', link: '/blogs' },
        { name: 'Contact Us', link: '/contactUs' },

  //   { name: 'Services', link: '/services' },

  //   { name: 'Contact', link: '/contact' },
  //   { name: 'Testimonials', link: '/testimonials' },
  //   { name: 'News', link: '/news' },
  //   { name: 'Blog', link: '/Our-Blogs' },
  //   { name: 'Privacy Policy', link: '/privacy-policy' },
  //   { name: 'Terms of Service', link: '/terms-of-service' },
  //   // Footer links
  //   { name: 'Our Services', link: '/web-development' },
  //   { name: 'Testimonial', link: '/testimonials' },
  ];

  return (

  <ChakraProvider >
      <header className="App-header" >
        <Router>
          <Navbar data={data} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/abouUs" element={<AboutPage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/contactUs" element={<ContactUs />} />
            {/* <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/news" element={<News />} />
            <Route path="/Our-Blogs" element={<Blogs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsService />} /> */}
          </Routes>
          <Footer />
        </Router>
      </header>
      </ChakraProvider>
  );
}

export default App;