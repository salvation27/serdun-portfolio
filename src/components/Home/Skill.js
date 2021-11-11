import React from 'react'
import { TitleBlock,Text} from '../../globalStyled'
import Wrapper from '../Wrapper/Wrapper'

import dataMainPage from '../../data/dataMainPage.json'
import Skillitem from './Skillitem'

const dataSkill = dataMainPage.skill


export default function Skill() {


    return (
        <section id="skills_sec" className="skills_sec">
           <Wrapper>
               <div className="col">
                   <div className="skills_wrapper">
                       <TitleBlock>{dataSkill.title}</TitleBlock>
                       <Text>{dataSkill.text}</Text>
                   </div>
                   <div className="skills_items">
                     <Skillitem items={dataSkill.itemSkills} />
                   </div>
               </div>
           </Wrapper>
        </section>
    )
}
