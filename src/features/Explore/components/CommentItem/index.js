/* eslint-disable react/prop-types */
import React from 'react'

import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { AuthorName } from '../../../../components/AuthorName'
import { Avatar } from '../../../../components/Avatar'
import { ButtonIcon } from '../../../../components/ButtonIcon'

import timeSince from '../../../../utils/timeSince'
import * as Styled from './styled.elements'

export const CommentItem = ({ dataComment }) => {
    return (
        <Styled.CommentItem>
            <Avatar width="32px" src={dataComment.author.avatarUrl} />
            <Styled.Info>
                <AuthorName name={dataComment.author.name} fontSize="14px" />
                <Styled.Content>{dataComment.content}</Styled.Content>
                <Styled.Date>{timeSince(dataComment.createdAt)}</Styled.Date>
            </Styled.Info>
            <Styled.Actions>
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
