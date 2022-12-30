import React, { useState } from "react";
import { PageButton, NavButton } from "../../css/StyleButton";
import {
  WholeScreenContainer,
  MainScreenContainer,
  HeaderContainer,
  BodyContainer,
  HeaderTextContainer,
  HeaderButtonContainer,
} from "../../css/StyleContainers";

import { Header1, Header2 } from "../../css/StyleText";
import GlobalStyle from "../../css/global-style";
import Board from "../CommunityComponents/Board";
import Card from "../card";
import logo from "../../../assets/logo.png"
import arrow from "../../../assets/arrow.svg"

import data from "../../../data/data.json";

import {	Link }	from "react-router-dom";

import ChangePngColor from "../../css/changePngColor";

import { Eng } from '../../css/StyleText';

const Community = () => {

  const [ board, setBoard ] = useState('Rankings');

  const rankingHandler = () => {
    setBoard('Rankings')
  }
  const announcementHandler = () => {
    setBoard('Announcement')
  }
  const settingsHandler = () => {
    setBoard('Settings')
  }
  console.log(board)
  return (
    <WholeScreenContainer>
      <GlobalStyle />      
      <Link to="/mypage">
        <PageButton>
          <img  src={arrow} alt='arrow'/>
        </PageButton> 
      </Link>
     
      <MainScreenContainer>
        <HeaderContainer>
          <HeaderTextContainer>
                <Header1>Week 3</Header1>
                <Header2>Nov. 19, 2020</Header2>
          </HeaderTextContainer>
          <HeaderButtonContainer>
                <NavButton onClick={rankingHandler}>Rankings</NavButton>
                <NavButton onClick={announcementHandler}>Announcement</NavButton>
                <NavButton onClick={settingsHandler}>Settings</NavButton>
                <img  src={logo} style={{height: '32px'} } alt='logo'/>
          </HeaderButtonContainer>
        </HeaderContainer>
        <BodyContainer>
          {Object.entries(data).map(([key, value]) => {
            return(
              <Card name={key} />
            )
          })}
          <Board current = {board} />
        </BodyContainer>
      </MainScreenContainer>
    </WholeScreenContainer>
  );
};
//
export default Community;

//99, 48, 358, 95, 106, 101