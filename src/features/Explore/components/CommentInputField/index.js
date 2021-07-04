/* eslint-disable react/prop-types */
import React from 'react'

import { FaPaperPlane, FaRegSmile } from 'react-icons/fa'

import { ButtonIcon } from '../../../../components/ButtonIcon'

import * as Styled from './styled.elements'

export const CommentInputField = ({ disable }) => {
    return (
        <Styled.FieldComment disable={disable}>
            <ButtonIcon icon={<FaRegSmile style={{ width: '28px', height: '28px' }} />} />
            <input placeholder="Add comment..." />
            <ButtonIcon icon={<FaPaperPlane style={{ width: '24px', height: '24px' }} />} />
        </Styled.FieldComment>
    )
}

export default CommentInputField
