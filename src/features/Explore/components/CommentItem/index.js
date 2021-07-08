/* eslint-disable react/prop-types */
import React from 'react'

import { FaRegHeart, FaHeart, FaEllipsisH } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { AuthorName } from '../../../../components/AuthorName'
import { Avatar } from '../../../../components/Avatar'
import { ButtonIcon } from '../../../../components/ButtonIcon'
import Modal from '../../../../components/Modal/Modal'

import useModal from '../../../../hooks/useModal'
import timeSince from '../../../../utils/timeSince'
import * as Styled from './styled.elements'

export const CommentItem = ({ dataComment }) => {
    const { isShowing, openModal, closeModal } = useModal()

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
                <Modal title="Comment" isShowing={isShowing} hide={closeModal}>
                    <Styled.OptionList>
                        <Styled.OptionItem>Report</Styled.OptionItem>
                        <Styled.OptionItem>Update</Styled.OptionItem>
                        <Styled.OptionItem>Delete</Styled.OptionItem>
                    </Styled.OptionList>
                </Modal>
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
