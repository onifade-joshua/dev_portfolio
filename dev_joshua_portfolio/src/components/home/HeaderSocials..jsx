import React from 'react';
import "./home.css";

const HeaderSocials = () => {
  return (
    <div className="home_socials">
        <a href="https://instagram.com/jay_drayl01" className="home_social-link" target="_blank">
        <i class="fa fa-instagram"></i>
        </a>

        <a href="https://twitter.com/JayDrayl01" className="home_social-link" target="_blank">
        <i class="fa fa-twitter"></i>
        </a>

        <a href="https://www.linkedin.com/in/onifade-joshua-7b844322b/" className="home_social-link" target="_blank">
        <i class="fa fa-linkedin"></i>
        </a>
    </div>
  )
}

export default HeaderSocials;