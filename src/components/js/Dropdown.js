import React, {useEffect, useState, useRef} from 'react';
import styled, { css } from 'styled-components';
import icon from '../../assets/drop.svg';
import '../css/card.css';

const Options = [
    {id: '2', value: 'Pass'},
    {id: '3', value: 'Fail'},
    {id: '4', value: 'Rest'},
    {id: '5', value: 'Late'}
];

const useDetectClose = (initialState) => {
    const [inputs, setInputs] = useState(initialState);
    const ref = useRef();

    const {isOpen, value} = inputs;

    const removeHandler = () => {
        setInputs({isOpen: !isOpen, value: value});
    }

    const changeValue = (newValue) => {
        setInputs({isOpen: !isOpen, value: newValue});
    }

    useEffect(() => {
        const onClick = (e) => {
            if(ref.current != null && !ref.current.contains(e.target)) {
                setInputs({isOpen: !isOpen, value: value});
            }
        };
    
        if(isOpen) {
            window.addEventListener("click", onClick);
        }
    
        return () => {
            window.removeEventListener("click", onClick);
        };
    }, [isOpen, value]);

    return [isOpen, value, ref, removeHandler, changeValue];
};



export const Dropdown = () => {
    const [isOpen, value, ref, handler, valueHandler] = useDetectClose({
        isOpen: false,
        value: 'select',
    });

    return (
        <Container>
            <Select onClick={handler} ref={ref}>
                <text>{value}</text>
                <img src={icon} alt="drop icon"></img>
            </Select>
            <Menu isDropped={isOpen}>
                <Ul>
                    {Options.map(el => {
                        return <Li key={el.id} onClick={() => {
                            valueHandler(el.value);
                        }}>{el.value}</Li>;
                    })}
                </Ul>
            </Menu>
        </Container>
    )
}

const primary = '#394B3F';
const lprimary ='#91A096';
const background = '#FFFCEB';

const Container = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const Select = styled.button`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 0px 13px 0px 4px;
    justify-content: space-between;
    align-items: center;

    background-color: rgba(0,0,0,0);
    color: ${primary};
    font: 14px itc-avant-garde-gothic-pro, sans-serif;
    font-weight: 300;
    line-height: 22px;

    cursor: pointer;
`;

const Menu = styled.div`
    position: absolute;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 0;
    
    visibility: hidden;
    overflow: hidden;
    transition: all 0.4s ease;

    ${({ isDropped }) =>
        isDropped &&
        css`
            visibility: visible;
            height: 104px;
        `
    }
`;

const Ul = styled.ul`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 206px;
`;

const Li = styled.li`
    width: 100%;
    color: ${background};
    background-color: ${lprimary};
    font: 14px itc-avant-garde-gothic-pro, sans-serif;
    font-weight: 300;
    line-height: 22px;
    padding: 0 0 0 5px;

    &:hover{
        background-color: ${primary};
    }
    cursor: pointer;
`