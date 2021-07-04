import React from 'react'

import { FaRegHeart } from 'react-icons/fa'

import { Avatar } from '../../../../components/Avatar'
import { ButtonIcon } from '../../../../components/ButtonIcon'

import * as Styled from './styled.elements'

export const CommentItem = () => {
    return (
        <Styled.CommentItem>
            <Avatar
                width="32px"
                src="https://lh3.googleusercontent.com/a-/AOh14Gi22ddILu0MPK4ezGtMUUFwcPBurlcNopxpc-HZwu0=s96-c"
            />
            <Styled.Info>
                <Styled.Name>
                    <b>Đặng Nguyễn Ngọc Trinh</b>
                </Styled.Name>
                <Styled.Content>Ảnh đẹp quá bạney, xứng đáng 10 người yêu</Styled.Content>
                <Styled.Date>3 days ago</Styled.Date>
            </Styled.Info>
            <Styled.Actions>
                <ButtonIcon icon={<FaRegHeart style={{ width: '14px', height: '14px' }} />} />
            </Styled.Actions>
        </Styled.CommentItem>
    )
}

export default CommentItem
