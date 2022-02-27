import React, { useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  let location = useLocation();

  const scrollTop = () => {
    console.log(location)
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    setTimeout(() => {
      scrollTop();
    }, 100)
  }, [location])


  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo({
          left: 0,
          top: 0,
        })}
      >
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>

    </div>

  );
}

export default App;
