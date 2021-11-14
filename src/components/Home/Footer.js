import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./Footer.css";
import Social from "./Social";
// import logo from "../../img/lab-sveta.jpg";

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <Wrapper>
        <div className="col">
          <div className="foter_wrap">
            {/* <h2 style={{ color: "red" }}>Footer</h2> */}
            <div className="foter_wrap_item">
              <h3>Viber , WhatsApp , Telegram</h3>
              <span>+38-067-417-8249</span>
            </div>
            <div className="foter_wrap_item">
              <h3>Skype</h3>
              <span>molotok2771</span>
            </div>
            <div className="foter_wrap_item">
              <h3>E-mail</h3>
              <span>nikolayzalipykin@gmail.com</span>
              <span>salvation2011@meta.ua</span>
            </div>
          </div>
          <Social />
          <div className="for_dev">
            <a
              href="https://provider-filter-sourse.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              works for dev
            </a>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Footer;
