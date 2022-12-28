import React from 'react'
import styled from 'styled-components'
import { EngPret } from './StyleText';


const primary = '#394B3F';
const secondary ='#FABB01';
const background = '#FFFCEB';


const NavButton = styled.button`
    
    height: 30px;
    color: ${primary};
    border: 2px solid ${primary};
    border-radius: 23px;
    margin: 0px 12px ;
    background: none;
    padding-left: 18px;
    padding-right: 18px;

    font: normal 700 15px/22px ITC Avant Garde Gothic Pro, sans-serif;

    &:hover{
        color: '#FFF';
    }
`

const PageButton = styled.button`
    height: 100vh;
    border: none;
    width: 3%;
    background-color: ${primary};
    color: ${background};
    font-weight: 900;
    margin: 0;
    font-size: x-large;

`

export { NavButton, PageButton } 



//${props => props.theme.primary};