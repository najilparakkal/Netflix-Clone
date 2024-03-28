import React from "react";
import './footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer-title">There’s even more to watch.</h1>
      <h4 className="footer-dis">
        Netflix has an extensive library of feature films, documentaries, TV
        shows, anime, award-winning Netflix originals and more. Watch as much as
        you want, anytime you want.
      </h4>
      <button className="footer-btn">Join Now</button>
      <a href="https://www.netflix.com/tudum" className="footer-a">
        Read about Netflix TV shows and movies and watch bonus videos on
        Tudum.com. Questions? Contact us.
      </a>
    </div>
  );
};

export default Footer;
