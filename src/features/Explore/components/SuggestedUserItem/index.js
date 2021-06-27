/* eslint-disable react/prop-types */
import React from 'react'

import styled from 'styled-components'

import { InfoSuggestedUser } from '../InfoSuggestedUser'

const ItemWrapper = styled.li`
    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;

    padding: 4px;
    border-radius: 2px;

    &::before {
        content: '';
        position: absolute;
        bottom: -30%;
        left: 0;
        z-index: 1;

        display: none;
        width: 100%;
        height: 20px;
        background-color: transparent;
    }

    &:hover {
        z-index: 2;
        cursor: pointer;
        background-color: ${(props) => props.theme.palette.bgrHover.main};

        &::before {
            display: block;
        }

        & > .suggest-user__info {
            display: block;
        }
    }
`
const ImageWrapper = styled.div`
    & > img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
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
const InfoUser = styled.div`
    width: 100%;
    display: none;
    position: absolute;
    top: calc(100% + 8px);
    left: 20px;
`
const SuggestedUserItem = ({ user }) => {
    return (
        <ItemWrapper>
            <ImageWrapper>
                <img src={user.avatarUrl} alt="avatar" />
            </ImageWrapper>
            <InfoWrapper>
                <span>{user.name}</span>
            </InfoWrapper>
            <InfoUser className="suggest-user__info">
                <InfoSuggestedUser user={user} />
            </InfoUser>
        </ItemWrapper>
    )
}

export default SuggestedUserItem