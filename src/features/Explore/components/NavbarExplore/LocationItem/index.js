/* eslint-disable react/prop-types */
import React from 'react'

import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Avatar } from '../../../../../components/Avatar'

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
const LocationItem = ({ location, setIsDisable }) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/explore/suggest/${location.id}`)
        setIsDisable(true)
    }
    return (
        <ItemWrapper onClick={handleClick}>
            <Avatar
                src={
                    location.image ||
                    'https://e7.pngegg.com/pngimages/433/330/png-clipart-computer-icons-location-icon-miscellaneous-location.png'
                }
                alt="avatar"
                width="32px"
            />
            <InfoWrapper>
                <span>{location.name}</span>
            </InfoWrapper>
        </ItemWrapper>
    )
}

export default LocationItem
