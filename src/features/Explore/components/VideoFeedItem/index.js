/* eslint-disable react/prop-types */
import React, { forwardRef, useEffect, useRef, useState } from 'react'

import { FaMapMarkerAlt, FaRegSmile, FaCog } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
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
import { setIsFollowUser, setSumHeightEl } from '../../exploreSlice'
import { ActionsBar } from '../ActionsBar'
import { Comment } from '../Comment'
import CommentInputField from '../CommentInputField'
import * as Styled from './styled.elements'

export const VideoFeedItem = ({ dataPost, index, lazyLoading }) => {
    const heightEl = localStorage.getItem('heightEl')
    const isFollowUser = useSelector((state) => state.explore.isFollowUser)
    const userID = useSelector((state) => state.auth.userID)
    const sumHeightEl = useSelector((state) => state.explore.sumHeightEl)
    const mobile = useBreakpoint(down('lg'))
    const dispatch = useDispatch()
    const commentRef = useRef(null)

    const { isShowing, openModal, closeModal } = useModal()
    const [isFollowing, setIsFollowing] = useState(false)
    const [totalComment, setTotalComment] = useState(dataPost.comments)

    useEffect(() => {
        const num = sumHeightEl.length
        let temp = [...sumHeightEl]
        if (num < index) {
            const el = document.querySelector(`.video_${index - 1}`)
            const height = el.offsetHeight
            temp.push(temp[num - 1] + height)
            dispatch(setSumHeightEl([...temp]))
        }
    }, [dispatch, index, sumHeightEl])

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
                                <Styled.OptionList>
                                    <Styled.OptionItem onClick={closeModal}>
                                        Report
                                    </Styled.OptionItem>
                                    {userID === dataPost.author.id ? (
                                        <Styled.OptionItem onClick={handleDeletePost}>
                                            Delete
                                        </Styled.OptionItem>
                                    ) : null}
                                    {userID === dataPost.author.id ? (
                                        <Styled.OptionItem>Update</Styled.OptionItem>
                                    ) : null}
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
                    <ButtonFollow
                        isFollowing={isFollowing}
                        handleFollow={() => handleFollowUser()}
                    />
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
                            totalComment={totalComment}
                            lazyLoading={lazyLoading}
                            dataPost={dataPost}
                            handleClickComment={() => handleClickComment()}
                        />
                        <Comment
                            lazyLoading={lazyLoading}
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

export default VideoFeedItem
