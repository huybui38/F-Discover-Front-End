/* eslint-disable unused-imports/no-unused-vars */

/* eslint-disable react/prop-types */
import React from 'react'

import styled from 'styled-components'

import { Comment } from '../Comment'
import { CommentInputField } from '../CommentInputField'

const Wrapper = styled.div`
    border-top: 1px solid ${(props) => props.theme.palette.baseLine.main};
`

export const CommentDialog = ({ postId, totalComment, setTotalComment }) => {
    return (
        <Wrapper>
            <Comment postId={postId} />
            <CommentInputField
                focus={false}
                postId={postId}
                totalComment={totalComment}
                setTotalComment={setTotalComment}
            />
        </Wrapper>
    )
}

export default CommentDialog
