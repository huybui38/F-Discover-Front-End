import React from 'react'

import { FaMapMarkerAlt, FaRegSmile } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { ButtonFollow } from '../../../../components/ButtonFollow'
import { ButtonIcon } from '../../../../components/ButtonIcon'

import DefaultAvatar from '../../../../assets/default_avatar.jpg'
import { ActionsBar } from '../ActionsBar'
import CommentInputField from '../CommentInputField'
import * as Styled from './styled.elements'

export const VideoFeedItem = () => {
    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.Author>
                    <Styled.Avatar href="https://lh3.googleusercontent.com/a-/AOh14Gi22ddILu0MPK4ezGtMUUFwcPBurlcNopxpc-HZwu0=s96-c">
                        <img
                            loading="lazy"
                            src="https://lh3.googleusercontent.com/a-/AOh14Gi22ddILu0MPK4ezGtMUUFwcPBurlcNopxpc-HZwu0=s96-c"
                        />
                    </Styled.Avatar>
                    <Styled.AuthorInfo>
                        <Styled.FlexWrapper>
                            <p>
                                <Link>
                                    <b>Đặng Nguyễn Ngọc Trinh</b>
                                </Link>
                            </p>
                            <p>-</p>
                            <p>Bác sĩ</p>
                        </Styled.FlexWrapper>
                        <Styled.FlexWrapper>
                            <p>3 hours ago</p>
                            <p>
                                <FaMapMarkerAlt /> <b>Hà Nội</b>
                            </p>
                        </Styled.FlexWrapper>
                        <Styled.Content>Hà Nội xịn của tao, sao cớ sao cơ sao cơ :3</Styled.Content>
                    </Styled.AuthorInfo>
                </Styled.Author>
                <Styled.ButtonWrapper>
                    <ButtonFollow />
                </Styled.ButtonWrapper>
            </Styled.Header>
            <Styled.Body>
                <Styled.BodyWrapper>
                    <Styled.VideoContainer>
                        <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/196562616_2948275348833011_8044697522132992167_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=DmcwgGfME9MAX-FcfWS&_nc_ht=scontent.fsgn3-1.fna&oh=198599ed65bdc6b3e12ce935bfdad685&oe=60E0EA3D" />
                    </Styled.VideoContainer>
                    <Styled.CommentContainer>
                        <ActionsBar />
                        <Styled.Comment></Styled.Comment>
                        <CommentInputField />
                    </Styled.CommentContainer>
                </Styled.BodyWrapper>
            </Styled.Body>
        </Styled.Container>
    )
}

export default VideoFeedItem
