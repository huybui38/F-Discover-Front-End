/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { Button } from '../../../../components/Button'
import { ButtonFollow } from '../../../../components/ButtonFollow'

import {
    checkFollowUserById,
    followUserById,
    unFollowUserById,
} from '../../../../services/api/userApi'
import { setIsFollowUser } from '../../exploreSlice'

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
const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
const FollowButton = styled(Button)`
    padding: 0 16px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.palette.primary.dark};
`
const Name = styled.div`
    padding: 8px 16px;
    font-size: 16px;
`
const Interactive = styled.div`
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
`
export const InfoSuggestedUser = ({ user }) => {
    const dispatch = useDispatch()
    const [isFollowing, setIsFollowing] = useState(false)
    const [isClickFollow, setIsClickFollow] = useState(false)

    useEffect(() => {
        checkFollowUserById(user.id)
            .then((res) => {
                if (res.message === 'Success') {
                    setIsFollowing(res.data.followed)
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }, [isClickFollow])

    const handleFollowUser = () => {
        if (isFollowing) {
            unFollowUserById(user.id)
                .then((res) => {
                    if (res.message === 'Success') {
                        setIsClickFollow(!isClickFollow)
                        const action = setIsFollowUser()
                        dispatch(action)
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        } else {
            followUserById(user.id)
                .then((res) => {
                    if (res.message === 'Success') {
                        setIsClickFollow(!isClickFollow)
                        const action = setIsFollowUser()
                        dispatch(action)
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
                <Avatar src={user.avatarUrl} alt="avatar" />
                <ButtonFollow isFollowing={isFollowing} handleFollow={handleFollowUser} />
            </Header>
            <Name>
                <b>{user.name}</b>
            </Name>
            <Interactive>
                <span>
                    <b>100</b> Follower
                </span>
                <span>
                    <b>200</b> Like
                </span>
            </Interactive>
        </InfoWrapper>
    )
}

export default InfoSuggestedUser
