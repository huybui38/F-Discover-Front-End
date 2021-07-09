/* eslint-disable react/prop-types */
import React from 'react'

import { FaRegHeart, FaHeart, FaEllipsisH } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { AuthorName } from '../../../../components/AuthorName'
import { Avatar } from '../../../../components/Avatar'
import { ButtonIcon } from '../../../../components/ButtonIcon'
import Dialog from '../../../../components/Dialog'

import { Error } from '../../../../helpers/notify'
import useModal from '../../../../hooks/useModal'
import { deleteCommentById } from '../../../../services/api/postApi'
import timeSince from '../../../../utils/timeSince'
import * as Styled from './styled.elements'

export const CommentItem = ({ dataComment, postId }) => {
    const { isShowing, openModal, closeModal } = useModal()

    const handleDeleteComment = () => {
        closeModal()
        deleteCommentById(postId, dataComment.id)
            .then((res) => {
                // if (res.message === 'Success') {
                //     closeModal()
                // }
            })
            .catch((e) => {
                console.log(e)
                Error('Delete comment failed.')
            })
    }
    return (
        <Styled.CommentItem>
            <Avatar width="32px" src={dataComment.author.avatarUrl} />
            <Styled.Info>
                <AuthorName name={dataComment.author.name} fontSize="14px" />
                <Styled.Date>{timeSince(dataComment.createdAt)}</Styled.Date>
                <Styled.Content>{dataComment.content}</Styled.Content>
            </Styled.Info>
            <Styled.Actions className="cmtItem__actions">
                <Styled.Option onClick={openModal}>
                    <FaEllipsisH />
                </Styled.Option>
                <Dialog title="Comment" isShowing={isShowing} hide={closeModal}>
                    <Styled.OptionList>
                        <Styled.OptionItem onClick={closeModal}>Report</Styled.OptionItem>
                        <Styled.OptionItem onClick={handleDeleteComment}>Delete</Styled.OptionItem>
                        <Styled.OptionItem onClick={closeModal}>Cancel</Styled.OptionItem>
                    </Styled.OptionList>
                </Dialog>
                <ButtonIcon icon={<FaRegHeart style={{ width: '14px', height: '14px' }} />} />
                {/* <ButtonIcon
                    bgrColor="rgba(255,63,52,0.1)"
                    icon={<FaHeart style={{ width: '14px', height: '14px', color: '#ff3f34' }} />}
                /> */}
            </Styled.Actions>
        </Styled.CommentItem>
    )
}

export default CommentItem
