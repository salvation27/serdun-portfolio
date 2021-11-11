import React from 'react'
// import {Link} from 'react-router-dom'
import Wrapper from '../Wrapper/Wrapper'
import  './About.css'
// import DownloadLink from "react-download-link";
import aboutSkills from "../../data/aboutSkill.json";
import AboutSkill from './AboutSkill'
import myPhoto from "../../myphoto.jpg";

const About = () => {
    return (
      <section className="about" id="about">
        <Wrapper>
          <div className="col-lg-3">
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
              {/* <Link to="/files/resume.docx" download>
                Download
              </Link> */}
              <div className="about_location_sosial"></div>
              <div className="about_location_adres">
                <div className="location_adres_city">
                  <i class="fas fa-map-marker-alt"></i>
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
          <div className="col-lg-9">
            <div className="about_description bloc_mod">
              <div className="about_desc_title">
                <h3>About</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, ipsa aut sint accusamus dolores provident expedita
                  asperiores veniam corrupti eveniet ex molestiae blanditiis
                  molestias. Quaerat libero est, temporibus neque quidem
                  eligendi, quam eveniet illo, hic quos impedit soluta. Quae,
                  expedita recusandae est quas quibusdam minus autem! Qui
                  distinctio officia quidem optio iure voluptas doloremque,
                  numquam sunt fuga quod, culpa cum temporibus dolores. Labore
                  nostrum tempore sunt, esse corporis vero repellendus
                  perspiciatis porro corrupti mollitia. Ut error, est delectus
                  odit quos alias, inventore quidem sapiente quod nulla
                  voluptatum molestias minus voluptas neque laborum perspiciatis
                  beatae! Itaque aliquid vero quos? Illo, perferendis!
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
