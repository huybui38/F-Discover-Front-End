/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import Avatar from '../../../../components/Avatar'
import { Button } from '../../../../components/Button'
import { ButtonFollow } from '../../../../components/ButtonFollow'

import {
    checkFollowUserById,
    followUserById,
    unFollowUserById,
} from '../../../../services/api/userApi'
import { authSelector } from '../../../Login/loginSlice'
import { setIsFollowUser, setMapFollow } from '../../exploreSlice'

const InfoWrapper = styled.div`
    width: 90%;
    background-color: #ffffff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 5);
    border-radius: 5px;
`
const Header = styled.div`
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
`
const FollowButton = styled(Button)`
    padding: 0 16px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.palette.primary.dark};
`
const Name = styled.div`
    padding: 8px 16px;
    font-size: 16px;

    &:hover {
        text-decoration: underline;
    }
`
const Interactive = styled.div`
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
`
export const InfoSuggestedUser = ({ user, handleClickProfile }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { mapFollow } = useSelector((state) => state.explore)
    const infoUserFollow = mapFollow.find((info) => info.id === user.id)

    let isAuthenticated = useSelector(authSelector)
    const userID = useSelector((state) => state.auth.userID)
    const isMe = userID === user.id ? true : false

    const handleFollowUser = () => {
        if (!isAuthenticated) {
            history.push('/login')
            return
        }
        if (infoUserFollow.status) {
            unFollowUserById(user.id)
                .then((res) => {
                    if (res.message === 'Success') {
                        dispatch(setMapFollow({ id: user.id, status: 0 }))
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        } else {
            followUserById(user.id)
                .then((res) => {
                    if (res.message === 'Success') {
                        dispatch(setMapFollow({ id: user.id, status: 1 }))
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }

    return (
        <InfoWrapper>
            <Header>
                <Avatar src={user.avatarUrl} alt="avatar" width="40px" />
                {isMe ? null : (
                    <ButtonFollow
                        isFollowing={infoUserFollow ? infoUserFollow.status : false}
                        handleFollow={() => handleFollowUser()}
                    />
                )}
            </Header>
            <Name onClick={handleClickProfile}>
                <b>{user.name}</b>
            </Name>
            <Interactive>
                <span>
                    <b>{user.following}</b> Following
                </span>
                <span>
                    <b>{user.followers}</b> Followers
                </span>
            </Interactive>
        </InfoWrapper>
    )
}

export default InfoSuggestedUser
