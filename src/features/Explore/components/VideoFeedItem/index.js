/* eslint-disable react/prop-types */
import React, { forwardRef, useEffect, useRef, useState } from 'react'

import { FaMapMarkerAlt, FaRegSmile, FaCog } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import { AuthorName } from '../../../../components/AuthorName'
import { Avatar } from '../../../../components/Avatar'
import { ButtonFollow } from '../../../../components/ButtonFollow'
import { ButtonIcon } from '../../../../components/ButtonIcon'
import Dialog from '../../../../components/Dialog'
import VideoPlayer from '../../../../components/Player/Video'

import DefaultAvatar from '../../../../assets/default_avatar.jpg'
import videoDemo from '../../../../assets/demo_video.mp4'
import { Error } from '../../../../helpers/notify'
import useModal from '../../../../hooks/useModal'
import { deleteCommentById } from '../../../../services/api/postApi'
import {
    checkFollowUserById,
    followUserById,
    unFollowUserById,
} from '../../../../services/api/userApi'
import timeSince from '../../../../utils/timeSince'
import { ActionsBar } from '../ActionsBar'
import { Comment } from '../Comment'
import CommentInputField from '../CommentInputField'
import * as Styled from './styled.elements'

export const VideoFeedItem = ({ dataPost, index, hidden }) => {
    const mobile = useBreakpoint(down('lg'))
    const commentRef = useRef(null)

    const { isShowing, openModal, closeModal } = useModal()
    const [isFollowing, setIsFollowing] = useState(false)
    useEffect(() => {
        if (!hidden) {
            checkFollowUserById(dataPost.author.id)
                .then((res) => {
                    if (res.message === 'Success') {
                        setIsFollowing(res.data.followed)
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }, [])
    const handleClickComment = () => {
        if (!mobile) {
            commentRef.current.focus()
        }
    }
    const handleDeletePost = () => {
        closeModal()
        deleteCommentById(dataPost.id)
            .then((res) => {
                if (res.comment === 'Success') {
                    console.log('Delete Success')
                }
            })
            .catch((e) => {
                console.log(e)
                Error('Delete post failed.')
            })
    }
    const handleFollowUser = () => {
        if (isFollowing) {
            unFollowUserById(dataPost.author.id).catch((e) => {
                console.log(e)
            })
        } else {
            followUserById(dataPost.author.id).catch((e) => {
                console.log(e)
            })
        }
    }
    return hidden ? (
        <div style={{ height: '684px' }}></div>
    ) : (
        <Styled.Container className={`video_${index}`}>
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
                            <Styled.Option className="post__actions" onClick={openModal}>
                                <FaCog style={{ width: '10px', height: '10px' }} />
                            </Styled.Option>
                            <Dialog title="Post" isShowing={isShowing} hide={closeModal}>
                                <Styled.OptionList>
                                    <Styled.OptionItem onClick={closeModal}>
                                        Report
                                    </Styled.OptionItem>
                                    <Styled.OptionItem onClick={handleDeletePost}>
                                        Delete
                                    </Styled.OptionItem>
                                    <Styled.OptionItem>Update</Styled.OptionItem>
                                    <Styled.OptionItem onClick={closeModal}>
                                        Cancel
                                    </Styled.OptionItem>
                                </Styled.OptionList>
                            </Dialog>
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
                    <ButtonFollow isFollowing={isFollowing} handleFollow={handleFollowUser} />
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
                            focus={true}
                            ref={commentRef}
                        />
                    </Styled.CommentContainer>
                </Styled.BodyWrapper>
            </Styled.Body>
        </Styled.Container>
    )
}

export default VideoFeedItem
