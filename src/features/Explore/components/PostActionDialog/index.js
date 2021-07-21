/* eslint-disable react/prop-types */
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Dialog from '../../../../components/Dialog'

import { Error, Success } from '../../../../helpers/notify'
import useModal from '../../../../hooks/useModal'
import { deletePostById } from '../../../../services/api/postApi'
import { setListSuggestPosts } from '../../exploreSlice'
import { PostUpdateDialog } from '../PostUpdateDialog'
import * as Styled from './styled.elements'

export const PostActionDialog = ({ dataPost, onExit }) => {
    const dispatch = useDispatch()
    const { listSuggestPosts } = useSelector((state) => state.explore)
    const userID = useSelector((state) => state.auth.userID)
    const [isShowing, toggle, openModal, closeModal] = useModal(false)

    const handleDeletePost = () => {
        deletePostById(dataPost.id)
            .then(() => {
                const temp = listSuggestPosts.filter((post) => post.id !== dataPost.id)
                dispatch(setListSuggestPosts(temp))
                Success('Delete post successful.')
            })
            .catch((e) => {
                console.log(e)
                Error('Delete post failed.')
            })
        onExit()
    }

    return (
        <Styled.OptionList>
            <Styled.OptionItem onClick={onExit}>Report</Styled.OptionItem>
            {userID === dataPost.author.id ? (
                <Styled.OptionItem onClick={handleDeletePost}>Delete</Styled.OptionItem>
            ) : null}
            {userID === dataPost.author.id ? (
                <Styled.OptionItem onClick={openModal}>Update</Styled.OptionItem>
            ) : null}
            <Styled.OptionItem onClick={onExit}>Cancel</Styled.OptionItem>

            <Dialog title="Update Post" isShowing={isShowing} hide={closeModal}>
                <PostUpdateDialog dataPost={dataPost} onExit={closeModal} />
            </Dialog>
        </Styled.OptionList>
    )
}

export default PostActionDialog
