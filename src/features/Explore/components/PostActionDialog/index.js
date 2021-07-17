/* eslint-disable react/prop-types */
import React from 'react'

import { useSelector } from 'react-redux'

import Dialog from '../../../../components/Dialog'

import useModal from '../../../../hooks/useModal'
import { PostUpdateDialog } from '../PostUpdateDialog'
import * as Styled from './styled.elements'

export const PostActionDialog = ({ dataPost, onExit }) => {
    const userID = useSelector((state) => state.auth.userID)
    const [isShowing, toggle, openModal, closeModal] = useModal(false)

    const handleDeletePost = () => {
        onExit()
    }

    return (
        <Styled.OptionList>
            <Styled.OptionItem onClick={onExit}>Report</Styled.OptionItem>
            {userID !== dataPost.author.id ? (
                <Styled.OptionItem onClick={handleDeletePost}>Delete</Styled.OptionItem>
            ) : null}
            {userID !== dataPost.author.id ? (
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
