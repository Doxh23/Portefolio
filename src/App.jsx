import React, {  useState, createRef } from 'react';
import './style/style.css';
import { Navbar } from './component/NavBar';
import { Route, Routes, useLocation } from 'react-router-dom';
import { About } from './component/About';
import { Work } from './component/Work';
import { Contact } from './component/Contact';
import { Home } from './component/Home';
import {Helmet} from "react-helmet"
import {
  SwitchTransition,
  CSSTransition,
} from 'react-transition-group';

function App() {
  const [cursorPosition,setCursorPosition] = useState({x: null,y:null})
  document.querySelector("body").addEventListener("mousemove", function(e){
    setCursorPosition({x:e.pageX-125,y:e.pageY-124})
  
  })
  const routes = [
    {
      path: '/',
      name: 'Home',
      element: <Home />,
      nodeRef: createRef(),
    },
    {
      path: '/About',
      name: 'About',
      element: <About />,
      nodeRef: createRef(),
    },
    {
      path: '/Work',
      name: 'Work',
      element: <Work />,
      nodeRef: createRef(),
    },
    {
      path: '/Contact',
      name: 'Contact',
      element: <Contact />,
      nodeRef: createRef(),
    },
   
  ];
  const [route, setroute] = useState(routes);
  let location = useLocation();

  const { nodeRef } = routes.find(
    (route) => route.path === location.pathname
  );

  return (
    <div className="App">
      <Helmet >
      <title>Adrien Péters</title>
        <meta name="description" content="portefolio" />
      </Helmet>
      <Navbar route={route} />
      <SwitchTransition>
        <CSSTransition
          timeout={300}
          key={location.pathname}
          classNames="fade"
          nodeRef={nodeRef}
          unmountOnExit
        >
          <Routes location={location}>
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={
                  <div className="container" ref={nodeRef}>
                    {route.element}
                  </div>
                }
                ref={route.nodeRef}
              /> 
            ))}
          </Routes>
        </CSSTransition>
      </SwitchTransition>
      <div  style={{top: cursorPosition.y, left:cursorPosition.x}} className='light'></div>
    </div>
  );
}

export default App;
