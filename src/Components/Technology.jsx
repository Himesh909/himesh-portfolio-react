import React from "react";

const language = [
  {
    id: 1,
    src: "Images/html-5-svgrepo-com.svg",
    text: "HTML",
  },
  {
    id: 2,
    src: "Images/css-svgrepo-com.svg",
    text: "CSS",
  },
  {
    id: 3,
    src: "Images/figma-svgrepo-com.svg",
    text: "Figma",
  },

  {
    id: 4,
    src: "Images/javascript-svgrepo-com.svg",
    text: "Java Script",
  },
  {
    id: 5,
    src: "Images/react-svgrepo-com.svg",
    text: "React.js",
  },
  {
    id: 6,
    src: "Images/github-142-svgrepo-com.svg",
    text: "GitHub",
  },
  {
    id: 7,
    src: "Images/netlify-svgrepo-com.svg",
    text: "Netlify",
  },
  {
    id: 8,
    src: "Images/vercel-icon-svgrepo-com.svg",
    text: "Vercel",
  },
];

const Technology = () => {
  return (
    <section className="section">
      <div className="container">
        <h3>Technologies Known</h3>
        <ul>
          {language.map((value, index) => {
            const { src, text } = value;
            return (
              <li className="list" key={index}>
                <img className="lang-img" src={src} />
                <span>{text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Technology;
