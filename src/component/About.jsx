import React from 'react';
import data from '../assets/data.json';

export const About = () => {
  return (
    <div className="About fade boxShadowSection">
      <div className="me">
        <img src="./assets/me.jpg" alt="" />
      </div>
      <div className="box ">
        <p>
          {' '}
          Bonjour, je suis <strong>Adrien Péters</strong> , développeur .net/Angular
          junior. j’ai commencé à m’auto-former sur les langages HTML
          et CSS. En 2021, j’ai alors intégré un bootcamp (Be code
          Liege) en 2021 dans lequel j’ai pu consolider ces acquis et
          travailler sur d’autres domaines
          (Javascript/react).Actuellement je suis en formation de 10
          mois en .net/Angular Depuis juin 2023 . Passionné par
          l'informatique, j'ai decidé de reprendre en cours du soir un
          bachelier en informatique pour apprendre tout ce qui entoure
          l'informatique et consolider mes connaissances .{' '}
        </p>

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
