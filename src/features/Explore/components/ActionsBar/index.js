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

import { Button } from '../../../../components/Button'
import { ButtonIcon } from '../../../../components/ButtonIcon'

import useDetectClickOutside from '../../../../hooks/useDetectionClickOut'
import { checkLikePostById, likePostById } from '../../../../services/api/postApi'
import formatNumber from '../../../../utils/formatNumber'
import * as Styled from './styled.elements'

const link = 'www.facebook.com/profile.php?id=100015055038244'
export const ActionsBar = ({ dataPost, handleClickComment }) => {
    const wrapperShareRef = useRef(null)

    const [isLikePost, setIsLikePost] = useState(false)
    const [isClickLike, setIsClickLike] = useState(false)
    const [isClickShare, setIsClickShare] = useState(false)
    const [copied, setCopied] = useState('')
    useEffect(() => {
        checkLikePostById(dataPost.id)
            .then((res) => {
                if (res.message === 'Success') {
                    setIsLikePost(res.data.liked)
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    useEffect(() => {
        likePostById(dataPost.data).catch((e) => {
            console.log(e)
        })
    }, [isClickLike])

    const handleShareMethod = () => {
        setIsClickShare(false)
        setCopied(false)
    }
    useDetectClickOutside(wrapperShareRef, () => handleShareMethod())
    return (
        <Styled.Wrapper>
            <Styled.Actions>
                <Styled.ActionItem>
                    {isLikePost ? (
                        <ButtonIcon
                            onClick={() => setIsClickLike(!isClickLike)}
                            bgrColor="rgba(255,63,52,0.1)"
                            icon={
                                <FaHeart
                                    style={{ width: '28px', height: '28px', color: '#ff3f34' }}
                                />
                            }
                        />
                    ) : (
                        <ButtonIcon
                            onClick={() => setIsClickLike(!isClickLike)}
                            icon={<FaRegHeart style={{ width: '28px', height: '28px' }} />}
                        />
                    )}
                    <span>{formatNumber(dataPost.likes, 1)}</span>
                </Styled.ActionItem>

                <Styled.ActionItem>
                    <ButtonIcon
                        onClick={() => handleClickComment()}
                        icon={<FaRegCommentAlt style={{ width: '28px', height: '28px' }} />}
                    />
                    <span>{formatNumber(dataPost.comments, 1)}</span>
                </Styled.ActionItem>

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