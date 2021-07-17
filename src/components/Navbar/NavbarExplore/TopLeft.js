import React, { useRef, useState } from 'react'

import styled from 'styled-components'

import BellIcon from '../../../assets/bell.svg'
import CloudIcon from '../../../assets/cloud-computing.svg'
import User from '../../../assets/user.svg'
import { useDetectOutsideClick } from './useDetectOutsideClick'

const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Button = styled.button`
    margin: 0px 0.6vw;
    cursor: pointer;
    border: none;
    width: calc(1.5vw + 3vh);
    height: calc(1.5vw + 3vh);
    border-radius: 50%;
    background-color: #eaeaea;
    &:hover,
    :active {
        filter: brightness(1.2);
    }
`

const MenuTrigger = styled.div`
    background: #ffffff;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    vertical-align: middle;
    transition: box-shadow 0.4s ease;
    margin-left: auto;
`

const Menu = styled.div`
    background: #bebebe;
    position: absolute;
    top: 80px;
    right: 40px;
    width: 200px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

    ${(props) => props.isActive} {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
`
const Element = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const List = styled.li`
    border-bottom: 1px solid #dddddd;
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
`
const Link = styled.a`
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
`

const TopLeft = () => {
    const dropdownRef = useRef(null)
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, true)
    const onClick = () => setIsActive(!isActive)
    console.log(isActive)
    return (
        <Box>
            <Button>
                <img src={CloudIcon} />
            </Button>
            <Button>
                <img src={BellIcon} />
            </Button>

            <MenuTrigger>
                <Button onClick={onClick}>{/* <img src={User} /> */}</Button>
                <Menu isActive={isActive}>
                    <nav ref={dropdownRef}>
                        <Element>
                            <List>
                                <Link href="#">Setting</Link>
                            </List>
                            <List>
                                <Link href="#">Log out</Link>
                            </List>
                        </Element>
                    </nav>
                </Menu>
            </MenuTrigger>
        </Box>
    )
}

export default TopLeft
