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

import { EngPret } from '../../css/StyleText';

const Community = () => {

  const [ board, setBoard ] = useState('Rankings');
  console.log("TESt")

  return (
    <WholeScreenContainer>
      <GlobalStyle />
      <PageButton> {">"} </PageButton>
      <MainScreenContainer>
        <HeaderContainer>
          <HeaderTextContainer>
                <Header1>Week 3</Header1>
                <Header2>Nov. 19, 2020</Header2>
          </HeaderTextContainer>
          <HeaderButtonContainer>
                <NavButton><EngPret>Rankings</EngPret></NavButton>
                <NavButton><EngPret>Announcement</EngPret></NavButton>
                <NavButton><EngPret>Settings</EngPret></NavButton>
                <img  src={logo} style={{height: '32px'} } alt='logo'/>
          </HeaderButtonContainer>
        </HeaderContainer>
        <BodyContainer>
          <Card name="호두"/>
          <Card name="호두"/>
          <Card name="호두"/>
          <Card name="호두"/>
          <Card name="호두"/>
          <Board />
        </BodyContainer>
      </MainScreenContainer>
    </WholeScreenContainer>
  );
};
//
export default Community;


