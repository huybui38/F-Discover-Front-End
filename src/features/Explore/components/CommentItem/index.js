import React from 'react'

import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { AuthorName } from '../../../../components/AuthorName'
import { Avatar } from '../../../../components/Avatar'
import { ButtonIcon } from '../../../../components/ButtonIcon'

import * as Styled from './styled.elements'

export const CommentItem = () => {
    return (
        <Styled.CommentItem>
            <Avatar
                width="32px"
                src="https://lh3.googleausercontent.com/a-/AOh14Gi22ddILu0MPK4ezGtMUUFwcPBurlcNopxpc-HZwu0=s96-c"
            />
            <Styled.Info>
                <AuthorName name="Đặng Nguyễn Ngọc Trinh" fontSize="14px" />
                <Styled.Content>
                    Ảnh đẹp quá bạney, xứng đáng 10 người yêu Ảnh đẹp quá bạney, xứng đáng 10 người
                    yêu Ảnh đẹp quá bạney, xứng đáng 10 người yêu
                </Styled.Content>
                <Styled.Date>3 days ago</Styled.Date>
            </Styled.Info>
            <Styled.Actions>
                {/* <ButtonIcon icon={<FaRegHeart style={{ width: '14px', height: '14px' }} />} /> */}
                <ButtonIcon
                    bgrColor="rgba(255,63,52,0.1)"
                    icon={<FaHeart style={{ width: '14px', height: '14px', color: '#ff3f34' }} />}
                />
            </Styled.Actions>
        </Styled.CommentItem>
    )
}

export default CommentItem
