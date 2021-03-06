/* eslint-disable import/no-named-as-default */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'

import { FaMapMarkerAlt, FaCog } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import { AuthorName } from '../../../../components/AuthorName'
import { Avatar } from '../../../../components/Avatar'
import { ButtonFollow } from '../../../../components/ButtonFollow'
import Dialog from '../../../../components/Dialog'
import VideoPlayer from '../../../../components/Player/Video'

import videoDemo from '../../../../assets/demo_video.mp4'
import useModal from '../../../../hooks/useModal'
import {
    checkFollowUserById,
    followUserById,
    unFollowUserById,
} from '../../../../services/api/userApi'
import timeSince from '../../../../utils/timeSince'
import { authSelector } from '../../../Login/loginSlice'
import { setIsFollowUser, setMapFollow } from '../../exploreSlice'
import { ActionsBar } from '../ActionsBar'
import { Comment } from '../Comment'
import CommentInputField from '../CommentInputField'
import PostActionDialog from '../PostActionDialog'
import * as Styled from './styled.elements'

export const Post = ({ dataPost, index }) => {
    const mobile = useBreakpoint(down('lg'))
    const { mapFollow } = useSelector((state) => state.explore)
    const infoUserFollow = mapFollow.find((info) => info.id === dataPost.author.id)

    let isAuthenticated = useSelector(authSelector)
    const userID = useSelector((state) => state.auth.userID)
    const isMe = userID === dataPost.author.id ? true : false
    const dispatch = useDispatch()
    const commentRef = useRef(null)
    const history = useHistory()

    const [isShowing, toggle, openModal, closeModal] = useModal(false)
    const [totalComment, setTotalComment] = useState()

    useEffect(() => {
        setTotalComment(dataPost.comments)
    }, [])

    const handleClickComment = () => {
        if (!isAuthenticated) {
            history.push('/login')
            return
        }
        if (!mobile) {
            commentRef.current.focus()
        }
    }
    const handleFollowUser = () => {
        if (!isAuthenticated) {
            history.push('/login')
            return
        }
        if (infoUserFollow.status) {
            unFollowUserById(dataPost.author.id)
                .then((res) => {
                    if (res.message === 'Success') {
                        dispatch(setMapFollow({ id: dataPost.author.id, status: 0 }))
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        } else {
            followUserById(dataPost.author.id)
                .then((res) => {
                    if (res.message === 'Success') {
                        dispatch(setMapFollow({ id: dataPost.author.id, status: 1 }))
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }
    const handleOpenPostActions = () => {
        if (!isAuthenticated) {
            history.push('/login')
            return
        }
        openModal()
    }
    return (
        <Styled.Container className={`video_${index}`}>
            {/* Header Post */}
            <Styled.Header>
                <Styled.Author>
                    <Avatar
                        width="50px"
                        src={dataPost.author.avatarUrl}
                        href={dataPost.author.avatarUrl}
                    />
                    <Styled.AuthorInfo>
                        <Styled.FlexWrapper style={{ paddingTop: '0' }}>
                            <AuthorName
                                style={{ marginRight: '8px' }}
                                name={dataPost.author.name}
                                authorId={dataPost.author.id}
                            />
                            {mobile ? null : <p>{dataPost.author.job}</p>}
                            <Styled.Option
                                className="post__actions"
                                onClick={() => handleOpenPostActions()}
                            >
                                <FaCog style={{ width: '10px', height: '10px' }} />
                            </Styled.Option>
                            <Dialog title="Post" isShowing={isShowing} hide={closeModal}>
                                <PostActionDialog dataPost={dataPost} onExit={closeModal} />
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

                {/* Button following user */}
                {isMe ? null : (
                    <Styled.ButtonWrapper>
                        <ButtonFollow
                            isFollowing={infoUserFollow ? infoUserFollow.status : false}
                            handleFollow={() => handleFollowUser()}
                        />
                    </Styled.ButtonWrapper>
                )}
            </Styled.Header>

            {/* Body Post */}
            <Styled.Body>
                <Styled.BodyWrapper>
                    {/* Left side: Video item */}
                    <Styled.VideoContainer>
                        <Styled.VideoCard>
                            <VideoPlayer
                                src={dataPost.videoUrl || videoDemo}
                                poster={dataPost.thumbnailUrl}
                            />
                        </Styled.VideoCard>
                    </Styled.VideoContainer>

                    {/* Right side: Comment and Actions */}
                    <Styled.CommentContainer>
                        <ActionsBar
                            totalComment={totalComment}
                            setTotalComment={setTotalComment}
                            dataPost={dataPost}
                            handleClickComment={() => handleClickComment()}
                            isFollowing={infoUserFollow ? infoUserFollow.status : false}
                            handleFollow={() => handleFollowUser()}
                        />
                        <Comment
                            postId={dataPost.id}
                            disable={mobile ? true : false}
                            totalComment={totalComment}
                            setTotalComment={setTotalComment}
                        />
                        <CommentInputField
                            postId={dataPost.id}
                            disable={mobile ? true : false}
                            focus={true}
                            ref={commentRef}
                            totalComment={totalComment}
                            setTotalComment={setTotalComment}
                        />
                    </Styled.CommentContainer>
                </Styled.BodyWrapper>
            </Styled.Body>
        </Styled.Container>
    )
}

export default Post
