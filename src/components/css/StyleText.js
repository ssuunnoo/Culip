import styled from 'styled-components'


const primary = '#394B3F';
//const secondary ='#FABB01';
const background = '#FFFCEB';

const Header1 = styled.p`
    font: 14px ITC Avant Garde Gothic Pro, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    color: ${primary};

`

const Header2 = styled.p`
    font: 14px ITC Avant Garde Gothic Pro, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;

    color: ${primary};

`

const Eng = styled.p`
    color: ${primary};
    font: 14px ITC Avant Garde Gothic Pro, sans-serif;
    font-weight: 300;
    line-height: 22px;
`;

const Kor = styled.p`
    color: ${primary};
    font: 16px Pretendard, sans-serif;
    font-weight: 400;
    line-height: 24px;
`;

const EngPret = styled.p`
    color: ${primary};
    font: 15px Pretendard, sans-serif;
    font-weight: 400;
    line-height: 24px;
    font-weight: 900;
`;

const BoardHeader = styled.p`
    color: ${primary};
    font: 24px ITC Avant Garde Gothic Pro, sans-serif;
    margin-bottom: 30px;
`

const ERanking = styled.p`
    color: ${primary};
    font: 16px ITC Avant Garde Gothic Pro, sans-serif;
    line-height: 22px;
    margin-right: 20px;
`

const KRanking = styled.p`
    color: ${primary};
    font: 16px ITC Avant Garde Gothic Pro, sans-serif;
    line-height: 18px;
    letter-spacing: 0.1px;
`

export { Header1, Header2, Eng, Kor, EngPret, BoardHeader, ERanking, KRanking } 
