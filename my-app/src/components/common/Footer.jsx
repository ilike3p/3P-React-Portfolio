import React from "react";
import { social } from "../data/data";

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos="zoom-in">{item.icon}</i>
          </>
        ))}
        <p data-aos="zoom-in">3P Design</p>
      </footer>
    </>
  );
};

export default Footer;
