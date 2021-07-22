/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import { FaMapMarkedAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import { AuthorName } from '../../../../components/AuthorName'
import { Avatar } from '../../../../components/Avatar'
import { ButtonBase } from '../../../../components/ButtonBase'

import { Error, Success } from '../../../../helpers/notify'
import { updatePostById } from '../../../../services/api/postApi'
import timeSince from '../../../../utils/timeSince'
import { setListSuggestPosts } from '../../exploreSlice'
import * as Styled from './styled.elements'

export const PostUpdateDialog = ({ dataPost, onExit }) => {
    const mobile = useBreakpoint(down('lg'))
    const dispatch = useDispatch()
    const { locationList, listSuggestPosts } = useSelector((state) => state.explore)
    const [value, setValue] = useState(dataPost.content)
    const handleChange = (e) => {
        setValue(e.currentTarget.textContent)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (dataPost.content !== value) {
            const getIdLocation = locationList.find(
                (location) => location.name === dataPost.location
            )
            const dataUpdate = {
                content: value,
                location: getIdLocation.id,
            }
            updatePostById(dataPost.id, dataUpdate)
                .then(() => {
                    Success('Update post successful.')
                    const post = listSuggestPosts.find((post) => post.id === dataPost.id)
                    const pos = listSuggestPosts.findIndex((post) => post.id === dataPost.id)
                    let temp = [...listSuggestPosts]
                    temp[pos] = { ...post, content: value }
                    dispatch(setListSuggestPosts(temp))
                    onExit()
                })
                .catch((e) => {
                    console.log(e)
                    Error('Update post failed.')
                })
        }
    }
    return (
        <Styled.Container>
            <Styled.Author>
                <Avatar width="50px" src={dataPost.author.avatarUrl} />
                <Styled.AuthorInfo>
                    <Styled.FlexWrapper style={{ paddingTop: '0' }}>
                        <AuthorName style={{ marginRight: '8px' }} name={dataPost.author.name} />
                        {mobile ? null : <p>{dataPost.author.job}</p>}
                    </Styled.FlexWrapper>

                    <Styled.FlexWrapper>
                        <p>{timeSince(dataPost.createdAt)}</p>
                        <p>
                            <FaMapMarkedAlt /> <b>{dataPost.location}</b>
                        </p>
                    </Styled.FlexWrapper>
                </Styled.AuthorInfo>
            </Styled.Author>
            <form onSubmit={handleSubmit}>
                <Styled.Main>
                    <Styled.Content>
                        <Styled.TextBox
                            role="textbox"
                            aria-multiline="true"
                            contentEditable="true"
                            onInput={handleChange}
                        >
                            {dataPost.content}
                        </Styled.TextBox>
                    </Styled.Content>
                    <Styled.VideoContainer>
                        <Styled.VideoCard>
                            <img src={dataPost.thumbnailUrl} />
                        </Styled.VideoCard>
                    </Styled.VideoContainer>
                </Styled.Main>

                <Styled.ButtonSave>
                    <ButtonBase
                        width="80%"
                        padding="8px"
                        background_color="#59ABAE"
                        text_color="white"
                        border="1px solid #59ABAE"
                        animation={true}
                        type="submit"
                    >
                        <b>Save</b>
                    </ButtonBase>
                </Styled.ButtonSave>
            </form>
        </Styled.Container>
    )
}

export default PostUpdateDialog
