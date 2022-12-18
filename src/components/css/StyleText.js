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

const Eng = styled.text`
    color: ${primary};
    font: 14px ITC Avant Garde Gothic Pro, sans-serif;
    font-weight: 300;
    line-height: 22px;
`;

const Kor = styled.text`
    color: ${primary};
    font: 16px Pretendard, sans-serif;
    font-weight: 400;
    line-height: 24px;
`;

const EngPret = styled.text`
    color: ${primary};
    font: 15px Pretendard, sans-serif;
    font-weight: 400;
    line-height: 24px;
    font-weight: 900;
`;

export { Header1, Header2, Eng, Kor, EngPret } 
