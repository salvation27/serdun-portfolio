import React from 'react'
// import {Link} from 'react-router-dom'
import Wrapper from '../Wrapper/Wrapper'
import  './About.css'
// import DownloadLink from "react-download-link";
import aboutSkills from "../../data/aboutSkill.json";
import AboutSkill from './AboutSkill'
import myPhoto from "../../myphoto.jpg";
import Sosial from '../Home/Social'

const About = () => {
    return (
      <section className="about" id="about">
        <Wrapper>
          <div className="col-lg-3 col-md-4">
            <div className="about_location bloc_mod">
              <div className="about_location_foto">
                <img src={myPhoto} alt="" />
              </div>
              <div className="about_location_name">
                <span>Serdun</span>Nikolay
              </div>
              <div className="about_location_prof">Web Developer</div>
              {/* <DownloadLink label="Download Resume" filename="resume.docx" /> */}
              <a
                href="/files/resume.docx"
                download
                className="about_location_prof about_location_prof_resume"
              >
                Download Resume
              </a>
              <div className="about_social">
                <Sosial />
              </div>

              {/* <Link to="/files/resume.docx" download>
                Download
              </Link> */}
              <div className="about_location_sosial"></div>
              <div className="about_location_adres">
                <div className="location_adres_city">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Ukrain,Kharkiv</span>
                </div>
                <div className="location_adres_city">
                  nikolayzalipykin@gmail.com
                </div>
                <div className="location_adres_city">+38-067-417-8249</div>
              </div>
              <div className="about_location_sendmail"></div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="about_description bloc_mod">
              <div className="about_desc_title">
                <h3>About</h3>
                <p>
                  In 2017, I decided to try to make my own website, watched
                  training videos and became interested in one blogger, Andrey
                  Gavrilov. He had great lessons. Then I found out that he has
                  his own online school{" "}
                  <a
                    href="https://wayup.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WayUp
                  </a>{" "}
                  I signed up for a layout course and passed it successfully! At
                  the end training already sent applications for freelance
                  exchange{" "}
                  <a
                    href="https://freelance.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Freelance.ru
                  </a>{" "}
                  and upon completion course earned his first money - it was the
                  first money, received via the "Internet". I continued on this{" "}
                  <a
                    href="https://freelance.ru/newprovidence"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    freelance exchange
                  </a>{" "}
                  their work , having completed a total of 40+ projects on
                  layout and integration on CMS. Then there were fewer on the
                  stock exchange orders and had to go to another job. But I
                  realized that I want further develop in this area and began to
                  study Javascript and React.js. Although the training is slow
                  (not enough time after work main), but I like Frontend with
                  Backend
                </p>
              </div>
              <div className="about_desc_skill">
                <div className="about_desc_skill_title">
                  <h5>What I am doing</h5>
                </div>
                <div className="about_desc_skill_item">
                  {aboutSkills.map((item, index) => {
                    return <AboutSkill key={index} item={item} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    );
}

export default About
