import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./Footer.css";
// import logo from './../../img/efycc'
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
          <div className="sosial_footer_wrap">
            <a
              href="https://github.com/salvation27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+380674178249"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>

            <a
              href="https://telegram.me/@salvation2771"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
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
