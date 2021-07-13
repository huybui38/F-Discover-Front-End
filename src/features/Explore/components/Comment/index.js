/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { getAllComment } from '../../../../services/api/postApi'
import { CommentItem } from '../CommentItem'
import * as Styled from './styled.elements'

export const Comment = ({ disable, postId, lazyLoading, totalComment, setTotalComment }) => {
    const isComment = useSelector((state) => state.explore.isComment)
    const [listComment, setListComment] = useState([])

    useEffect(() => {
        if (!lazyLoading) {
            console.log('check comment')
            getAllComment(postId, 1, 20)
                .then((res) => {
                    if (res.message === 'Success') {
                        setListComment(res.data.comments)
                    }
                })
                .catch((e) => console.log(e))
        }
    }, [isComment])

    return (
        <Styled.CommentContainer disable={disable}>
            <Styled.CommentList>
                {listComment
                    ? listComment.map((data) => (
                          <CommentItem
                              key={data.id}
                              postId={postId}
                              dataComment={data}
                              totalComment={totalComment}
                              setTotalComment={setTotalComment}
                          />
                      ))
                    : null}
            </Styled.CommentList>
        </Styled.CommentContainer>
    )
}

export default Comment
