/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import { FaMapMarkedAlt } from 'react-icons/fa'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import styled from 'styled-components'

import { AuthorName } from '../../../../components/AuthorName'
import { Avatar } from '../../../../components/Avatar'
import ButtonBase from '../../../../components/ButtonBase'
import ButtonWithIcons from '../../../../components/ButtonWithIcons'

import timeSince from '../../../../utils/timeSince'
import * as Styled from './styled.elements'

export const PostUpdateDialog = ({ dataPost, onExit }) => {
    const mobile = useBreakpoint(down('lg'))
    const [value, setValue] = useState(dataPost.content)
    const handleChange = (e) => {
        setValue(e.currentTarget.textContent)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(value)
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
                            <img src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/139649842_1689564847913470_8498253979555734359_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=nS9BkLPE2ZAAX9HJNGh&_nc_ht=scontent-xsp1-3.xx&oh=8aecc154f06345c3c834ca7137115873&oe=60F440F4" />
                        </Styled.VideoCard>
                    </Styled.VideoContainer>
                </Styled.Main>

                <Styled.ButtonSave>
                    <ButtonBase
                        width="350px"
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
