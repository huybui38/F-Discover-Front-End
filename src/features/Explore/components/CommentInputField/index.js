/* eslint-disable react/prop-types */
import React, { forwardRef, useState } from 'react'

import { FaPaperPlane, FaRegSmile } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

import { ButtonIcon } from '../../../../components/ButtonIcon'

import { createComment } from '../../../../services/api/postApi'
import { setIsComment } from '../../exploreSlice'
import * as Styled from './styled.elements'

export const CommentInputField = ({ disable, postId, focus }, ref) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (value) {
            createComment(postId, { content: value })
                .then((res) => {
                    if (res.message === 'Success') {
                        const action = setIsComment()
                        dispatch(action)
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        }
        setValue('')
    }
    return (
        <Styled.FieldComment onSubmit={handleSubmit} disable={disable}>
            <ButtonIcon icon={<FaRegSmile style={{ width: '28px', height: '28px' }} />} />
            {focus ? (
                <input
                    ref={ref}
                    value={value}
                    onChange={handleChange}
                    type="text"
                    placeholder="Add comment..."
                />
            ) : (
                <input
                    value={value}
                    onChange={handleChange}
                    type="text"
                    placeholder="Add comment..."
                />
            )}
            <ButtonIcon
                type="submit"
                icon={<FaPaperPlane style={{ width: '24px', height: '24px' }} />}
            />
        </Styled.FieldComment>
    )
}

export default forwardRef(CommentInputField)
