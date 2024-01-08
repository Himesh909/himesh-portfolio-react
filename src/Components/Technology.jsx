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
    src: "Images/react-svgrepo-com.svg",
    text: "React.js",
  },
  {
    id: 4,
    src: "Images/github-142-svgrepo-com.svg",
    text: "GitHub",
  },
  {
    id: 5,
    src: "Images/netlify-svgrepo-com.svg",
    text: "Netlify",
  },
];

const Technology = () => {
  return (
    <section className="section">
      <div className="container">
        <h3>Technologies</h3>
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
