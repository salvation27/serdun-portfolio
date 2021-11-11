import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Svg from './Svg'
import {Link} from 'react-router-dom'

import {Text, Title} from '../../globalStyled'
import dataMainPage from '../../data/dataMainPage.json'

import './Home.css'

export default function Offer() {
    return (
      <section id="offer" className="offer">
        <Wrapper>
          <div className="col">
            <div className="offer_wrapper">
              <Title>{dataMainPage.offer.title}</Title>
              <Text>{dataMainPage.offer.text}</Text>
              <Link to="/portfolio" className="btn_style btn_potfolio">
                <span>Portfolio</span>
              </Link>
              <div className="fig">
                <Svg />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    );
}
