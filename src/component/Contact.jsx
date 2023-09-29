import React from 'react';
import { Helmet } from 'react-helmet';

export const Contact = () => {
  return (
    <>
      <Helmet>
        {' '}
        <title>Adrien Péters / Contact</title>
      </Helmet>
      <div className="fade contact">
        <div className="element">
          <div className="redirectToEmail">
            <a href="mailto:peters-adrien@live.be" className="email">
              {' '}
              contact Me
            </a>
          </div>
          <div className="socialNetwork">
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/adrienpeters/"
              target="_blank"
              value="test"
            >
              <img
                className="svgMedia"
                src="./assets/linkedin.svg"
                alt=""
              />{' '}
            </a>
            <a
              className="github"
              href="https://github.com/Doxh23"
              target="_blank"
            >
              <img
                className="svgMedia"
                src="./assets/github.svg"
                alt="github"
                target="_blank"
              />{' '}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
