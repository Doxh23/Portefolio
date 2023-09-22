import React from 'react';
import data from '../assets/data.json';

export const About = () => {
  return (
    <div className="About fade boxShadowSection">
      <div className="me">
        <img src="./assets/me.jpg" alt="" />
        
      </div>
      <div className="box ">
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae tempore alias, officia quas fugit porro, nihil voluptates esse laboriosam error excepturi molestias repudiandae ipsum atque, nesciunt laborum perferendis sit.
        Atque dicta laborum ad, quia eius nesciunt repellat expedita cupiditate voluptates magni similique distinctio facilis iure suscipit eveniet. Nesciunt et suscipit rem dolorem, ipsum laboriosam ex porro asperiores totam aspernatur.</p>

        <h1>Skills</h1>
        <div className="List skills">
          {data &&
            data.skills.map((ex) => {
              return (
                <div className="element" key={ex.title}>
                 <img src={`assets/${ex.img}`} alt="" />
                 <p>{ex.title}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="box">

        <h1>Experiences</h1>
        <div className="List">
          {data &&
            data.experience.map((ex) => {
              return (
                <div className="element" key={ex.id}>
                  <div className="role">{ex.role}</div>
                  <div className="title"> {ex.name}</div>
                  <hr />
                  <div className="desc"> {ex.desc}</div>
                  <hr />
                  <div className="year">{ex.year}</div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="box">
        <h1>Formations</h1>
        <div className="List">
          {data &&
            data.formations.map((ex) => {
              return (
                <div className="element" key={ex.id}>
                  <div className="title"> {ex.name}</div>
                  <hr />
                  <div className="desc"> {ex.desc}</div>
                  <hr />
                  <div className="year">{ex.year}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
