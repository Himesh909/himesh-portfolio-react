import React from "react";

const ContactMe = [
  {
    id: 1,
    href: "https://github.com/Himesh909",
    src: "Images/github-142-svgrepo-com.svg",
    text: "Himesh909",
  },
  {
    id: 2,
    href: "mailto:khatrihimesh909@gmail.com",
    src: "Images/gmail-svgrepo-com.svg",
    text: "khatrihimesh909@gmail.com",
  },
  {
    id: 3,
    href: "tel:+91-9265522380",
    src: "Images/call-receive-svgrepo-com.svg",
    text: "+91 9265522380",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <footer className="navigation">
        <div className="footer">
          <div className="name-link">Contact Me</div>
          <ul className="pills">
            {ContactMe.map((value, index) => {
              const { href, src, text } = value;
              return (
                <li key={index}>
                  <a className="link" href={href}>
                    <img className="footer-img" src={src} />
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
