import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import { TitleBlock} from '../../globalStyled'
import dataMainPage from '../../data/dataMainPage.json'
import ProjectItem from './ProjectItem'
import BtnProgectsAll from './BtnProgectsAll'
const dataProjects = dataMainPage.Projects.Progects



// отфильтровать  массив по параметру best

const dataBest = dataProjects.filter(function (item) {
  return item.best === true;
});






export default function BestProgects() {
    return (
      <section id="best_progects" className="best_progects">
        <Wrapper>
          <div className="col">
            <div className="best_progects_wrap">
              <TitleBlock>Best Projects</TitleBlock>
            </div>
            <div className="projects_wrap">
              {dataBest.map((item, index) => {
                return <ProjectItem item={item} key={index} num={index + 1} />;
              })}
            </div>
            <BtnProgectsAll />
          </div>
        </Wrapper>
      </section>
    );
}
