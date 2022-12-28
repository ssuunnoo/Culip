import React from "react";
import styled from "styled-components";

export {
  WholeScreenContainer,
  MainScreenContainer,
  HeaderContainer,
  BodyContainer,
  BoardContainer,
  HeaderTextContainer,
  HeaderButtonContainer
};

const primary = "#394B3F";
const secondary = "#FABB01";
const background = "#FFFCEB";

const WholeScreenContainer = styled.div`
  display: flex;
`;

const MainScreenContainer = styled.div`
  padding: 0px 92px 0px 40px;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  padding-top: 80px;
  position: relative;
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80%;
`;

const BoardContainer = styled.div`
  border: 2px solid ${primary};
  border-radius: 1.5em;
  width: 204px;
  height: 558px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTextContainer = styled.div``;

const HeaderButtonContainer = styled.div`

    display: flex;
    justify-content: center;
    position: absolute;
    right: 0;
`;
