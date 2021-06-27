/* eslint-disable react/prop-types */
import React from 'react'

import styled from 'styled-components'

import { Button } from '../../../../components/Button'
import { ButtonWithIcons } from '../../../../components/ButtonWithIcons'

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
    return (
        <InfoWrapper>
            <Header>
                <Avatar src={user.avatarUrl} alt="avatar" />
                {/* <FollowButton>Follow</FollowButton> */}
                <ButtonWithIcons
                    width="80px"
                    padding="8px"
                    background_color="#59ABAE"
                    text_color="white"
                    animation={true}
                    onClick={() => console.log('concu')}
                >
                    Follow
                </ButtonWithIcons>
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
