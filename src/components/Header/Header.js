import React from 'react'

import Logo from './Logo'
import Menu from './Menu'
import Wrapper from '../Wrapper/Wrapper'
import './Header.css'

export default function Header() {
    return (
        <header id='header' className='header'>
            <Wrapper>
                <Logo /> 
                <Menu /> 
            </Wrapper>   
        </header>
    )
}
