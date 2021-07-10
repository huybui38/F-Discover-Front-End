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
} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import { ButtonIcon } from '../../../../components/ButtonIcon'
import Dialog from '../../../../components/Dialog'

import useDetectClickOutside from '../../../../hooks/useDetectionClickOut'
import useModal from '../../../../hooks/useModal'
import { checkLikePostById, likePostById, unLikePostById } from '../../../../services/api/postApi'
import formatNumber from '../../../../utils/formatNumber'
import { CommentDialog } from '../CommentDialog'
import * as Styled from './styled.elements'

const link = 'www.facebook.com/profile.php?id=100015055038244'
export const ActionsBar = ({ dataPost, handleClickComment }) => {
    const mobile = useBreakpoint(down('lg'))
    const wrapperShareRef = useRef(null)

    const [isLikePost, setIsLikePost] = useState(false)
    const [isClickLike, setIsClickLike] = useState(false)
    const [isClickShare, setIsClickShare] = useState(false)
    const [copied, setCopied] = useState('')

    const { isShowing, openModal, closeModal } = useModal()

    useEffect(() => {
        let mounted

        checkLikePostById(dataPost.id)
            .then((res) => {
                if (res.message === 'Success') {
                    if (mounted) {
                        setIsLikePost(res.data.liked)
                    }
                }
            })
            .catch((e) => {
                console.log(e)
            })

        return () => {
            mounted = false
        }
    }, [isClickLike])

    const handleLikePost = () => {
        if (isLikePost) {
            unLikePostById(dataPost.id)
                .then((res) => {
                    if (res.message === 'Success') {
                        setIsClickLike(!isClickLike)
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        } else {
            likePostById(dataPost.id)
                .then((res) => {
                    if (res.message === 'Success') {
                        setIsClickLike(!isClickLike)
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }

    const handleShareMethod = () => {
        setIsClickShare(false)
        setCopied(false)
    }
    useDetectClickOutside(wrapperShareRef, () => handleShareMethod())
    return (
        <Styled.Wrapper>
            <Styled.Actions>
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
                    <span>{formatNumber(dataPost.likes, 1)}</span>
                </Styled.ActionItem>

                {/* Comment */}
                <Styled.ActionItem>
                    <ButtonIcon
                        onClick={mobile ? () => openModal() : () => handleClickComment()}
                        icon={<FaRegCommentAlt style={{ width: '28px', height: '28px' }} />}
                    />
                    <span>{formatNumber(dataPost.comments, 1)}</span>
                </Styled.ActionItem>
                <Dialog title="Comment" isShowing={isShowing} hide={() => closeModal()}>
                    <CommentDialog postId={dataPost.id} />
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
