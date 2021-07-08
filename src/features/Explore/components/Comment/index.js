/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import { getAllComment } from '../../../../services/api/postApi'
import { CommentItem } from '../CommentItem'
import * as Styled from './styled.elements'

export const Comment = ({ disable, postId }) => {
    const [listComment, setListComment] = useState([])

    useEffect(() => {
        getAllComment(postId, 1, 20)
            .then((res) => {
                if (res.message === 'Success') {
                    setListComment(res.data)
                }
            })
            .catch((e) => console.log(e))
    }, [])

    return (
        <Styled.CommentContainer disable={disable}>
            <Styled.CommentList>
                {listComment
                    ? listComment.map((data) => <CommentItem key={data.id} dataComment={data} />)
                    : null}
            </Styled.CommentList>
        </Styled.CommentContainer>
    )
}

export default Comment
