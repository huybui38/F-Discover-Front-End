/* eslint-disable react/prop-types */
import React from 'react'

import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import styled from 'styled-components'

import { Avatar } from '../../../../components/Avatar'

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
    const mobile = useBreakpoint(down('lg'))
    return (
        <ItemWrapper>
            <Avatar src={user.avatarUrl} alt="avatar" width="32px" />
            <InfoWrapper>
                <span>{user.name}</span>
            </InfoWrapper>
            {!mobile ? (
                <InfoUser className="suggest-user__info">
                    <InfoSuggestedUser user={user} />
                </InfoUser>
            ) : null}
        </ItemWrapper>
    )
}

export default SuggestedUserItem
