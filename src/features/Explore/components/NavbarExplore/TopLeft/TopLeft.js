import React, { useRef, useState } from 'react'

import { FaSignOutAlt, FaUserAlt, FaWrench } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import styled, { keyframes } from 'styled-components'

import { Avatar } from '../../../../../components/Avatar'
import UpdateVideoModal from '../../../../../components/Modal/UploadVideoModal'
import UpdateProfileModal from '../../../../Profile/components/UpdateProfileModal'

import BellIcon from '../../../../../assets/bell.svg'
import CloudIcon from '../../../../../assets/cloud-computing.svg'
import useDetectClickOutside from '../../../../../hooks/useDetectionClickOut'
import { useModal } from '../../../../../hooks/useModal'
import { authSelector, signOut } from '../../../../Login/loginSlice'
import { resetProfileState } from '../../../../Profile/profileSlice'

const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > div {
        margin-left: 16px;
    }
`

const Button = styled.button`
    cursor: pointer;
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #eaeaea;
    &:hover,
    :active {
        filter: brightness(1.2);
    }
`

const MenuTrigger = styled.div`
    position: relative;
    width: 35px;
    height: 35px;
    background-color: #fafafa;

    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    vertical-align: middle;
    transition: box-shadow 0.4s ease;
    margin-left: auto;

    &:hover {
        & > div {
            opacity: 1;
            visibility: visible;
            display: block;
            transform: translateY(0);
        }
    }
`

const Menu = styled.div`
    background: #bebebe;
    position: absolute;
    top: 50px;
    right: 0;
    z-index: 1;

    width: 200px;
    display: none;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: -40px;
        right: 0;

        width: 35px;
        height: 50px;
        background-color: transparent;
    }
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: -19px;
        right: 5px;
        z-index: 1;

        width: 20px;
        height: 20px;
        clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
        background-color: #bebebe;
    }
`
const Element = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
`

const List = styled.li`
    border-bottom: 1px solid #dddddd;
    text-decoration: none;
    color: #333333;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.3s;
    transition-timing-function: ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`
const LinkItem = styled(Link)`
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
`
export const Btn = styled.button`
    cursor: pointer;
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #eaeaea;
    &:hover,
    :active {
        filter: brightness(1.2);
    }
    background-color: #59abae;
`
export const BtnUploadMobile = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1;
    background-color: transparent;
    width: 60px;
    height: 100px;
`
const moveLeftToRight = keyframes`
    0%{
        transform: translateX(-8px)
    }

    50%{
        transform: translateX(8px)
    }

    100%{
        transform: translateX(0)
    }
`
export const LinkLogin = styled(Link)`
    position: relative;
    text-decoration: none;
    line-height: 24px;
    font-size: 15px;
    font-weight: 500;
    text-shadow: 1px 1px 2px #050505;
    margin: 0 8px;

    list-style: none;
    color: ${(props) => props.color || 'white'};

    &::before {
        content: '';
        display: none;
        position: absolute;
        bottom: 0;
        width: 100%;

        border: 1px solid #1dd1a1;
    }

    &:hover {
        cursor: pointer;
        transform: translateY(-1px);
        transition: all 0.1s linear;

        &::before {
            display: block;
            animation: ${moveLeftToRight} 0.35s linear;
        }
    }
`
const TopLeft = () => {
    const mobile = useBreakpoint(down('sm'))
    const avatarUrl = useSelector((state) => state.profile.selfBioDetail.avatarUrl)
    let isAuthenticated = useSelector(authSelector)
    const dispatch = useDispatch()
    const dropdownRef = useRef(null)

    const [isActive, setIsActive] = useState(false)
    const [isShowing, toggle, openModal, closeModal] = useModal(false)
    const [isShowingUpdateProfile, toggleShowingUpdateProfile] = useModal(false)
    const handleClick = (e) => {
        e.preventDefault()
        setIsActive(true)
    }
    const handShowingUpdateProfile = (e) => {
        e.preventDefault()
        toggleShowingUpdateProfile()
    }

    const onUploadPostSuccess = () => {}

    useDetectClickOutside(dropdownRef, () => setIsActive(false))
    return !isAuthenticated ? (
        <LinkLogin to="/login">Login</LinkLogin>
    ) : (
        <Box>
            {!mobile ? (
                <div>
                    <Button onClick={openModal}>
                        <img src={CloudIcon} />
                    </Button>
                </div>
            ) : null}
            {!mobile ? (
                <div>
                    <Button>
                        <img src={BellIcon} />
                    </Button>
                </div>
            ) : null}
            <MenuTrigger ref={dropdownRef}>
                <Avatar src={avatarUrl} alt="Avatar profile" />
                <Menu isActive={isActive}>
                    <Element>
                        <List>
                            <FaUserAlt />
                            <LinkItem to="/profile">My profile</LinkItem>
                        </List>
                        <List>
                            <FaWrench />
                            <LinkItem href="#" onClick={handShowingUpdateProfile}>
                                Setting
                            </LinkItem>
                        </List>
                        <List>
                            <FaSignOutAlt />
                            <LinkItem
                                to="/home"
                                onClick={() => {
                                    dispatch(resetProfileState())
                                    dispatch(signOut())
                                }}
                            >
                                Log out
                            </LinkItem>
                        </List>
                    </Element>
                </Menu>
            </MenuTrigger>
            {mobile ? (
                <BtnUploadMobile>
                    <Btn onClick={openModal}>
                        <img src={CloudIcon} />
                    </Btn>
                </BtnUploadMobile>
            ) : null}
            <UpdateVideoModal
                isShowing={isShowing}
                toggle={toggle}
                onSuccess={onUploadPostSuccess}
            />
            <UpdateProfileModal
                isShowing={isShowingUpdateProfile}
                toggle={toggleShowingUpdateProfile}
            />
        </Box>
    )
}

export default TopLeft
