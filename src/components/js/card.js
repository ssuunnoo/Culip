import React, {Component} from 'react';
import styled from 'styled-components';
import '../css/card.css';
import data from '../../data/data.json';
import { Eng, Kor } from '../css/StyleText';
import {Dropdown} from './Dropdown';

class Week extends Component {
   
    render() {
        const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
        const weekStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        }
        return(
            <div style={weekStyle}>
                {
                    //0: Future, 1: Today, 2: Pass, 3: Fail, 4: Rest, 5: Late
                    Object.entries(days).map(([key, value]) => {
                        return(
                            <Day day={value} check={data[this.props.name]['check'][key]-'0'}/>
                        )
                    })
                }
            </div>
        );
    }
}
class Day extends Component{
    render(){
        const basicStyle = {
            display: "block",
            width: "28px",
            height: "28px",
            borderRadius: "50%",

            fontFamily: 'itc-avant-grade-gothic, sans-serif',
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "14px",
        
            textAlign: "center",
            lineHeight: "28px",
        }
        const dayStyles = [
            {color: `${primaryColor}`,
            opacity: "60%",},
            {width: "26px",
            height: "26px",
            lineHeight: "26px",
            border: `${primaryColor} 1px solid`,
            color: `${primaryColor}`,},
            {backgroundColor: `${primaryColor}`,
            color: `${backgroundColor}`,},
            {backgroundColor: `${secondaryColor}`,
            color: `${backgroundColor}`},
            {backgroundColor: `${lprimaryColor}`,
            color: `${backgroundColor}`,},
            {width: "26px",
            height: "26px",
            lineHeight: "26px",
            border: `${secondaryColor} 1px solid`,
            color: `${secondaryColor}`,},
        ];
        return(
            <div style={Object.assign({}, basicStyle, dayStyles[this.props.check])}>{this.props.day}</div>
        );
    }
}
class Card extends Component {
    constructor(props){
        super(props);
        this.state={
            name: this.props.name,
            time: data[this.props.name]['time'],
            remains: data[this.props.name]['remains'],
            money: data[this.props.name]['money'],
        }
    }

    render (){
        return (
            <Container>
                <Profile>
                    <Pic src={require("../../data/img/hodu.jpg")}/>
                    <Kor>{this.state.name}</Kor>
                    <Line></Line>
                </Profile>
                <Check>
                    <Week name={this.state.name}></Week>
                    <TextContainer>
                        <Eng>Time</Eng>
                        <Eng>{this.state.time}</Eng>
                    </TextContainer>
                    <Line></Line>
                </Check>
                <Options>
                    <Dropdown></Dropdown>
                    <Line></Line>
                </Options>
                <Remain>
                    <Eng style={{fontWeight:500, margin: '0px 0px 0px 4px'}}>Remains</Eng>
                    <TextContainer>
                      <Eng>pass</Eng>
                        {
                            this.state.remains[0] < 10
                            ? <Eng>0{this.state.remains[0]}</Eng>
                            : <Eng>{this.state.remains[0]}</Eng>
                        }
                    </TextContainer>
                    <TextContainer>
                      <Eng>sick</Eng>
                        {
                            this.state.remains[0] < 10
                            ? <Eng>0{this.state.remains[1]}</Eng>
                            : <Eng>{this.state.remains[1]}</Eng>
                        }
                    </TextContainer>
                    <Line></Line>
                </Remain>
                <Status>
                    <Eng style={{fontWeight:500, margin: '0px 0px 0px 4px'}}>M. Status</Eng>
                    <TextContainer>
                      <Eng>deposit</Eng>
                      <Eng>₩ {this.state.money[0].toFixed(1)}</Eng>
                    </TextContainer>
                    <TextContainer>
                      <Eng>fine</Eng>
                      <Eng>₩ {this.state.money[1].toFixed(1)}</Eng>
                    </TextContainer>
                    <TextContainer>
                      <Eng>prize</Eng>
                      <Eng>₩ {this.state.money[2].toFixed(1)}</Eng>
                    </TextContainer>
                    <Line></Line>
                </Status>
            </Container>
        )
    }
}

const primaryColor = "#394B3F";
const lprimaryColor = "#91A096";
const secondaryColor = "#FABB01";
const backgroundColor = "#FFFCEB";


const Line = styled.hr`
    width: 211px;
    height: 2px;
    border: none;
    background-color: ${primaryColor};

    margin: 0;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
`;

const Container = styled.div`
    display: grid;
    grid-template-rows: 150px 101px 60px 112px 1fr;
    height: 558px;
    width: 212px;
`;

const Profile = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
    display: grid;
    justify-items: center;
`;

const Pic = styled.img`
    width: 110px;
    height: 110px;
    border: 2px solid ${primaryColor};
`;

const Check = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 4px 0px 4px;
`;

const Options = styled.div`
    position: relative;
`;

const Remain = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`;

const Status = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`;

export default Card;