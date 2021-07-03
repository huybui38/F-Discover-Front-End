import React from 'react'

import { FaPaperPlane, FaRegSmile } from 'react-icons/fa'

import { ButtonIcon } from '../../../../components/ButtonIcon'

import * as Styled from './styled.elements'

export const CommentInputField = () => {
    return (
        <Styled.FieldComment>
            <ButtonIcon icon={<FaRegSmile style={{ width: '28px', height: '28px' }} />} />
            <input placeholder="Add comment..." />
            <ButtonIcon icon={<FaPaperPlane style={{ width: '28px', height: '28px' }} />} />
        </Styled.FieldComment>
    )
}

export default CommentInputField
