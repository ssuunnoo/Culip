import React from 'react'

import { BoardHeader, ERanking, KRanking } from "../../css/StyleText";
import { BoardContainer, BoardDividingLine, EachRankingContainer } from '../../css/StyleContainers'

const Board = ({current}) => {

  if (current === 'Rankings'){
    return (
      <BoardContainer><BoardRankings /></BoardContainer>   
    )
  }
  else if (current === 'Announcement'){
    return (
      <BoardContainer><BoardAnnouncement /></BoardContainer>   
    )
  }
  return (
    <BoardContainer>SETTINGS</BoardContainer> 
  )
}

const BoardAnnouncement = () => {

  return (
    <div>
      
      <ERanking>인증</ERanking>
      <br/>
      <KRanking>• 매일 채팅방에 인증 <br/>&nbsp; 올리기</KRanking>
      <KRanking>• 30분 이내는 <br/>&nbsp; "지각" 처리</KRanking>

      <BoardDividingLine/>
      
      <ERanking>PASS</ERanking>
      <br/>
      <KRanking>• 1주일에 한번 PASS <br/>&nbsp; 가능 <br/>&nbsp;  (4일 이상부터)</KRanking>
      <KRanking>• 1달에 한번 병가 <br/>&nbsp; 가능</KRanking>

      <BoardDividingLine/>

      <ERanking>벌금</ERanking>
      <br/>
      <KRanking>• [지각] 500원</KRanking>
      <KRanking>• [망함] 1000원</KRanking>
      <KRanking>• 주마다 1인에게 <br/>&nbsp; 몰빵</KRanking>
   
    </div>
  )
}

// 여기는 DB 연동되면 좀 손보도록 합시다
const BoardRankings = () => {

  return (
    <div>
      <BoardHeader>Weekly <br/>Ranking </BoardHeader>
      
      <EachRankingContainer>
          <ERanking>1st &nbsp;</ERanking>
          <KRanking>하루가정 교사</KRanking>
      </EachRankingContainer>
      <EachRankingContainer>
          <ERanking>2nd&nbsp;</ERanking>
          <KRanking>연변일진짱</KRanking>
      </EachRankingContainer>
      <EachRankingContainer>
          <ERanking>3rd&nbsp;&nbsp;</ERanking>
          <KRanking>노롤라</KRanking>
      </EachRankingContainer>
      <EachRankingContainer>
          <ERanking>4th&nbsp;&nbsp;</ERanking>
          <KRanking>시크릿쥬쥬</KRanking>
      </EachRankingContainer>
      
      <BoardDividingLine/>
      <BoardHeader>Monthly <br/>Ranking </BoardHeader>

      <EachRankingContainer>
          <ERanking>1st &nbsp;</ERanking>
          <KRanking>하루가정 교사</KRanking>
      </EachRankingContainer>
      <EachRankingContainer>
          <ERanking>2nd&nbsp;</ERanking>
          <KRanking>연변일진짱</KRanking>
      </EachRankingContainer>
      <EachRankingContainer>
          <ERanking>3rd&nbsp;&nbsp;</ERanking>
          <KRanking>노롤라</KRanking>
      </EachRankingContainer>
      <EachRankingContainer>
          <ERanking>4th&nbsp;&nbsp;</ERanking>
          <KRanking>시크릿쥬쥬</KRanking>
      </EachRankingContainer>
    </div>
  )
}


export default Board
