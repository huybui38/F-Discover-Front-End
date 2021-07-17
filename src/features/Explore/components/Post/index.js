/* eslint-disable import/no-named-as-default */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { forwardRef, useEffect, useRef, useState } from 'react'

import { FaMapMarkerAlt, FaRegSmile, FaCog } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import { AuthorName } from '../../../../components/AuthorName'
import { Avatar } from '../../../../components/Avatar'
import { ButtonFollow } from '../../../../components/ButtonFollow'
import Dialog from '../../../../components/Dialog'
import VideoPlayer from '../../../../components/Player/Video'

import videoDemo from '../../../../assets/demo_video.mp4'
import { Error } from '../../../../helpers/notify'
import useModal from '../../../../hooks/useModal'
import {
    checkFollowUserById,
    followUserById,
    unFollowUserById,
} from '../../../../services/api/userApi'
import timeSince from '../../../../utils/timeSince'
import { setIsFollowUser } from '../../exploreSlice'
import { ActionsBar } from '../ActionsBar'
import { Comment } from '../Comment'
import CommentInputField from '../CommentInputField'
import PostActionDialog from '../PostActionDialog'
import * as Styled from './styled.elements'

export const Post = ({ dataPost, index }) => {
    const mobile = useBreakpoint(down('lg'))
    const isFollowUser = useSelector((state) => state.explore.isFollowUser)
    const dispatch = useDispatch()
    const commentRef = useRef(null)

    const { isShowing, openModal, closeModal } = useModal()
    const [isFollowing, setIsFollowing] = useState(false)
    const [totalComment, setTotalComment] = useState(dataPost.comments)

    useEffect(() => {
        let mounted = true
        console.log('check follow')
        checkFollowUserById(dataPost.author.id)
            .then((res) => {
                if (res.message === 'Success') {
                    if (mounted) {
                        setIsFollowing(res.data.followed)
                    }
                }
            })
            .catch((e) => {
                console.log(e)
            })
        return () => {
            mounted = false
        }
    }, [isFollowUser])

    const handleClickComment = () => {
        if (!mobile) {
            commentRef.current.focus()
        }
    }
    const handleFollowUser = () => {
        if (isFollowing) {
            unFollowUserById(dataPost.author.id)
                .then((res) => {
                    if (res.message === 'Success') {
                        const action = setIsFollowUser()
                        dispatch(action)
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        } else {
            followUserById(dataPost.author.id)
                .then((res) => {
                    if (res.message === 'Success') {
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
        <Styled.Container className={`video_${index}`}>
            {/* Header Post */}
            <Styled.Header>
                <Styled.Author>
                    <Avatar width="50px" src={dataPost.author.avatarUrl} />
                    <Styled.AuthorInfo>
                        <Styled.FlexWrapper style={{ paddingTop: '0' }}>
                            <AuthorName
                                style={{ marginRight: '8px' }}
                                name={dataPost.author.name}
                            />
                            {mobile ? null : <p>{dataPost.author.job}</p>}
                            <Styled.Option className="post__actions" onClick={openModal}>
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
                <Styled.ButtonWrapper>
                    <ButtonFollow
                        isFollowing={isFollowing}
                        handleFollow={() => handleFollowUser()}
                    />
                </Styled.ButtonWrapper>
            </Styled.Header>

            {/* Body Post */}
            <Styled.Body>
                <Styled.BodyWrapper>
                    {/* Left side: Video item */}
                    <Styled.VideoContainer>
                        <Styled.VideoCard>
                            <VideoPlayer src={dataPost.videoUrl || videoDemo} />
                        </Styled.VideoCard>
                    </Styled.VideoContainer>

                    {/* Right side: Comment and Actions */}
                    <Styled.CommentContainer>
                        <ActionsBar
                            totalComment={totalComment}
                            setTotalComment={setTotalComment}
                            dataPost={dataPost}
                            handleClickComment={() => handleClickComment()}
                            isFollowing={isFollowing}
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
