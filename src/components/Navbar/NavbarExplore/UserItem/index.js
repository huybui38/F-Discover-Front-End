/* eslint-disable react/prop-types */
import React from 'react'

import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Avatar } from '../../../../components/Avatar'

const ItemWrapper = styled.li`
    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;

    padding: 4px 8px;
    border-radius: 2px;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.palette.bgrHover.main};
    }
`
const InfoWrapper = styled.div`
    width: calc(100% - 30px);
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    font-size: 12px;
    & > span:first-child {
        font-weight: 600;
        word-wrap: break-word;
    }
`
const UserItem = ({ user, setIsDisable }) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/profile/${user.id}`)
        setIsDisable(true)
    }
    return (
        <ItemWrapper onClick={handleClick}>
            <Avatar src={user.image || '#'} alt="avatar" width="32px" />
            <InfoWrapper>
                <span>{user.name}</span>
            </InfoWrapper>
        </ItemWrapper>
    )
}

export default UserItem
