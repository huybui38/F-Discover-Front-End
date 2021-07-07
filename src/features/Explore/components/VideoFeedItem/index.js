/* eslint-disable react/prop-types */
import React, { forwardRef, useRef } from 'react'

import { FaMapMarkerAlt, FaRegSmile } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import { AuthorName } from '../../../../components/AuthorName'
import { Avatar } from '../../../../components/Avatar'
import { ButtonFollow } from '../../../../components/ButtonFollow'
import { ButtonIcon } from '../../../../components/ButtonIcon'
import VideoPlayer from '../../../../components/Player/Video'

import DefaultAvatar from '../../../../assets/default_avatar.jpg'
import videoDemo from '../../../../assets/demo_video.mp4'
import timeSince from '../../../../utils/timeSince'
import { ActionsBar } from '../ActionsBar'
import { Comment } from '../Comment'
import CommentInputField from '../CommentInputField'
import * as Styled from './styled.elements'

export const VideoFeedItem = ({ dataPost }) => {
    const mobile = useBreakpoint(down('lg'))
    const commentRef = useRef(null)

    const handleClickComment = () => {
        if (!mobile) {
            commentRef.current.focus()
        }
    }
    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.Author>
                    <Avatar width="50px" src={dataPost.author.avatarUrl} />
                    <Styled.AuthorInfo>
                        <Styled.FlexWrapper style={{ paddingTop: '0' }}>
                            <AuthorName
                                style={{ marginRight: '8px' }}
                                name={dataPost.author.name}
                            />
                            <p>{dataPost.author.job}</p>
                        </Styled.FlexWrapper>
                        <Styled.FlexWrapper>
                            <p>{timeSince(dataPost.createdAt)}</p>
                            <p>
                                <FaMapMarkerAlt /> <b>{dataPost.location}</b>
                            </p>
                        </Styled.FlexWrapper>
                        <Styled.Content>{dataPost.content}</Styled.Content>
                    </Styled.AuthorInfo>
                </Styled.Author>
                <Styled.ButtonWrapper>
                    <ButtonFollow />
                </Styled.ButtonWrapper>
            </Styled.Header>
            <Styled.Body>
                <Styled.BodyWrapper>
                    <Styled.VideoContainer>
                        {/* <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/196562616_2948275348833011_8044697522132992167_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=DmcwgGfME9MAX-FcfWS&_nc_ht=scontent.fsgn3-1.fna&oh=198599ed65bdc6b3e12ce935bfdad685&oe=60E0EA3D" /> */}
                        <Styled.VideoCard>
                            <VideoPlayer src={dataPost.videoUrl || videoDemo} />
                        </Styled.VideoCard>
                    </Styled.VideoContainer>
                    <Styled.CommentContainer>
                        <ActionsBar
                            dataPost={dataPost}
                            handleClickComment={() => handleClickComment()}
                        />
                        <Comment postId={dataPost.id} disable={mobile ? true : false} />
                        <CommentInputField
                            postId={dataPost.id}
                            disable={mobile ? true : false}
                            ref={commentRef}
                        />
                    </Styled.CommentContainer>
                </Styled.BodyWrapper>
            </Styled.Body>
        </Styled.Container>
    )
}

export default VideoFeedItem
