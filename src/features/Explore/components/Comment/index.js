/* eslint-disable react/prop-types */
import React from 'react'

import { CommentItem } from '../CommentItem'
import * as Styled from './styled.elements'

export const Comment = ({ disable }) => {
    return (
        <Styled.CommentContainer disable={disable}>
            <Styled.CommentList>
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </Styled.CommentList>
        </Styled.CommentContainer>
    )
}

export default Comment
