/* eslint-disable react/prop-types */
import React, { forwardRef, useState } from 'react'

import { FaPaperPlane, FaRegSmile } from 'react-icons/fa'

import { ButtonIcon } from '../../../../components/ButtonIcon'

import { createComment } from '../../../../services/api/postApi'
import * as Styled from './styled.elements'

export const CommentInputField = ({ disable, postId }, ref) => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (value) {
            createComment(postId, { content: value }).catch((e) => {
                console.log(e)
            })
        }
        setValue('')
    }
    return (
        <Styled.FieldComment onSubmit={handleSubmit} disable={disable}>
            <ButtonIcon icon={<FaRegSmile style={{ width: '28px', height: '28px' }} />} />
            {!disable ? (
                <input
                    ref={ref}
                    value={value}
                    onChange={handleChange}
                    type="text"
                    placeholder="Add comment..."
                />
            ) : null}
            <ButtonIcon
                type="submit"
                icon={<FaPaperPlane style={{ width: '24px', height: '24px' }} />}
            />
        </Styled.FieldComment>
    )
}

export default forwardRef(CommentInputField)
