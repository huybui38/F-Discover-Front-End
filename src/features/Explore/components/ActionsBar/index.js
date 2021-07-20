/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from 'react'

import {
    FaHeart,
    FaRegHeart,
    FaRegCommentAlt,
    FaRegCopy,
    FaRegShareSquare,
    FaCheck,
    FaPlusCircle,
} from 'react-icons/fa'
import { FiPlusCircle } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import { ButtonIcon } from '../../../../components/ButtonIcon'
import Dialog from '../../../../components/Dialog'

import configs from '../../../../configurations/index'
import useDetectClickOutside from '../../../../hooks/useDetectionClickOut'
import { useModal } from '../../../../hooks/useModal'
import { likePostById, unLikePostById } from '../../../../services/api/postApi'
import formatNumber from '../../../../utils/formatNumber'
import { authSelector } from '../../../Login/loginSlice'
import { CommentDialog } from '../CommentDialog'
import * as Styled from './styled.elements'

export const ActionsBar = ({
    dataPost,
    handleClickComment,
    totalComment,
    setTotalComment,
    isFollowing,
    handleFollow,
}) => {
    const mobile = useBreakpoint(down('lg'))
    const wrapperShareRef = useRef(null)
    const history = useHistory()
    let isAuthenticated = useSelector(authSelector)
    const link = `${configs.publicUrl}/profile/${dataPost.author.id}`

    const [totalLike, setTotalLike] = useState(dataPost.likes)
    const [isLikePost, setIsLikePost] = useState(dataPost.likeStatus)
    const [isClickShare, setIsClickShare] = useState(false)
    const [copied, setCopied] = useState('')
    const [isShowing, toggle, openModal, closeModal] = useModal(false)

    const handleLikePost = () => {
        if (!isAuthenticated) {
            history.push('/login')
            return
        }
        if (isLikePost) {
            unLikePostById(dataPost.id)
                .then((res) => {
                    if (res.message === 'Success') {
                        setIsLikePost(false)
                        setTotalLike(totalLike - 1)
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        } else {
            likePostById(dataPost.id)
                .then((res) => {
                    if (res.message === 'Success') {
                        setIsLikePost(true)
                        setTotalLike(totalLike + 1)
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }

    const handleShareMethod = () => {
        if (!isAuthenticated) {
            history.push('/login')
            return
        }
        setIsClickShare(false)
        setCopied(false)
    }
    const handleClickCommentMobile = () => {
        if (!isAuthenticated) {
            history.push('/login')
            return
        }
        openModal()
    }
    useDetectClickOutside(wrapperShareRef, () => handleShareMethod())
    return (
        <Styled.Wrapper>
            <Styled.Actions>
                {/* Follow */}
                {mobile ? (
                    <Styled.ActionItem>
                        {isFollowing ? (
                            <ButtonIcon
                                onClick={() => handleFollow()}
                                icon={
                                    <FaPlusCircle
                                        style={{ width: '28px', height: '28px', color: '#59ABAE' }}
                                    />
                                }
                            />
                        ) : (
                            <ButtonIcon
                                onClick={() => handleFollow()}
                                icon={
                                    <FiPlusCircle
                                        style={{
                                            width: '28px',
                                            height: '28px',
                                        }}
                                    />
                                }
                            />
                        )}
                        <span>{isFollowing ? 'Following' : 'Follow'}</span>
                    </Styled.ActionItem>
                ) : null}

                {/* Like */}
                <Styled.ActionItem>
                    {isLikePost ? (
                        <ButtonIcon
                            onClick={() => handleLikePost()}
                            bgrColor="rgba(255,63,52,0.1)"
                            icon={
                                <FaHeart
                                    style={{ width: '28px', height: '28px', color: '#ff3f34' }}
                                />
                            }
                        />
                    ) : (
                        <ButtonIcon
                            onClick={() => handleLikePost()}
                            icon={<FaRegHeart style={{ width: '28px', height: '28px' }} />}
                        />
                    )}
                    <span>{formatNumber(totalLike, 1)}</span>
                </Styled.ActionItem>

                {/* Comment */}
                <Styled.ActionItem>
                    <ButtonIcon
                        onClick={
                            mobile ? () => handleClickCommentMobile() : () => handleClickComment()
                        }
                        icon={<FaRegCommentAlt style={{ width: '28px', height: '28px' }} />}
                    />
                    <span>{formatNumber(totalComment, 1)}</span>
                </Styled.ActionItem>
                <Dialog title="Comment" isShowing={isShowing} hide={() => closeModal()}>
                    <CommentDialog
                        postId={dataPost.id}
                        totalComment={totalComment}
                        setTotalComment={setTotalComment}
                    />
                </Dialog>

                {/* Share */}
                <Styled.ActionItem ref={wrapperShareRef}>
                    <Styled.ShareWrapper>
                        <ButtonIcon
                            onClick={() => setIsClickShare(!isClickShare)}
                            icon={<FaRegShareSquare style={{ width: '28px', height: '28px' }} />}
                        />
                        <Styled.ShareMethod disabled={!isClickShare}>
                            <Styled.UrlShare value={link} readOnly type="url" />
                            <Styled.BtnCopy>
                                {copied ? (
                                    <Styled.CopyChecked>
                                        <FaCheck />
                                    </Styled.CopyChecked>
                                ) : (
                                    <ButtonIcon
                                        onClick={() => setCopied(link)}
                                        icon={
                                            <FaRegCopy style={{ width: '14px', height: '14px' }} />
                                        }
                                    />
                                )}
                            </Styled.BtnCopy>
                        </Styled.ShareMethod>
                    </Styled.ShareWrapper>

                    <span>{formatNumber(0, 1)}</span>
                </Styled.ActionItem>
            </Styled.Actions>

            <Styled.Seen>
                <b>Your friend</b> and <b>{dataPost.likes} others</b> have seen
            </Styled.Seen>
        </Styled.Wrapper>
    )
}

export default ActionsBar
