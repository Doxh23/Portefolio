// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import data from '../assets/data.json';
import { Helmet } from 'react-helmet';
export const Work = () => {
    return (
        <>
            <Helmet>
                <title> Adrien Péters / Work</title>
            </Helmet>

            <div className="fade works">
                <h2>My Works</h2>
                <div className="list">
                    {data.works.map((el) => {
                        return (
                            <div className="element">
                                <div
                                    className="screen"
                                    style={{
                                        background: `url(../assets/${el.img})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '100% auto',
                                    }}
                                >
                                    <div className="links">
                                        <a
                                            target="_blank"
                                            href={`${el.github}`}
                                        >
                                            Github
                                        </a>
                                        {el.hasOwnProperty('live') ? (
                                            <a
                                                target="_blank"
                                                href={`${el.live}`}
                                            >
                                                Live
                                            </a>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>

                                <div className="information">
                                    <h4>{el.name}</h4>
                                    <p>
                                        {el?.commentaire
                                            ? el.commentaire
                                            : ''}
                                    </p>
                                    <div className="technology">
                                        {el.technologie.map(
                                            (tech) => {
                                                return (
                                                    <span>
                                                        {tech}
                                                    </span>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* <div className="fade works">
        <div className="listWorks">
          {data &&
            data.works.map((work, i) => {
              return (
                <div
                  style={{
                    background: `url(../assets/${work.img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: ' 100% 100%',
                  }}
                  className="miniWork"
                  key={i}
                  onMouseEnter={() => setid(i)}
                >
                  <div className="linkProject">
                    <h6>{work.name}</h6>
                    <p>{work.status}</p>
                    <div>
                      <a href={work.github} target="_blank">
                        Github
                      </a>
                      {work.hasOwnProperty('live') ? (
                        <a href={work.live} target="_blank">
                          {' '}
                          Live
                        </a>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div
          className="work"
          ref={ref}
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        ></div>
      </div> */}
        </>
    );
};
