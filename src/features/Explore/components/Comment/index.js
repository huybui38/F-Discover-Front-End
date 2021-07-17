/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { getAllComment } from '../../../../services/api/postApi'
import { CommentItem } from '../CommentItem'
import * as Styled from './styled.elements'

export const Comment = ({ disable, postId, totalComment, setTotalComment }) => {
    const isComment = useSelector((state) => state.explore.isComment)
    const [listComment, setListComment] = useState([])
    const [isClickView, setIsClickView] = useState({ status: false, type: '' })

    useEffect(() => {
        getAllComment(postId, 1, 5)
            .then((res) => {
                if (res.message === 'Success') {
                    setListComment(res.data.comments)
                }
            })
            .catch((e) => console.log(e))
    }, [isComment])

    useEffect(() => {
        if (!isClickView.status) return
        if (isClickView.status) {
            if (isClickView.type === 'MORE') {
                getAllComment(postId, 1, totalComment)
                    .then((res) => {
                        if (res.message === 'Success') {
                            setListComment(res.data.comments)
                        }
                    })
                    .catch((e) => console.log(e))
            } else {
                let viewLess = listComment.slice(0, 5)
                setListComment([...viewLess])
            }
            setIsClickView({ status: false, type: '' })
        }
    }, [isClickView])

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
                {totalComment > 5 ? (
                    listComment && listComment.length <= 5 ? (
                        <Styled.ViewControl
                            onClick={() => setIsClickView({ status: 'true', type: 'MORE' })}
                        >
                            View all comment
                        </Styled.ViewControl>
                    ) : (
                        <Styled.ViewControl
                            onClick={() => setIsClickView({ status: 'true', type: 'LESS' })}
                        >
                            Hidden away
                        </Styled.ViewControl>
                    )
                ) : null}
            </Styled.CommentList>
        </Styled.CommentContainer>
    )
}

export default Comment
