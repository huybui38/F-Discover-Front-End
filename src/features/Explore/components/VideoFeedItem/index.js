import React from 'react'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { ButtonFollow } from '../../../../components/ButtonFollow'

import DefaultAvatar from '../../../../assets/default_avatar.jpg'
import * as Styled from './styled.elements'

export const VideoFeedItem = () => {
    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.Author>
                    <Styled.Avatar href="https://lh3.googleusercontent.com/a-/AOh14Gi22ddILu0MPK4ezGtMUUFwcPBurlcNopxpc-HZwu0=s96-c">
                        <img
                            loading="lazy"
                            src="https://lh3.googleusercontent.com/a-/AOh14Gi22ddILu0MPK4ezGtMUUFwcPBurlcNopxpc-HZwu0=s96-c"
                        />
                    </Styled.Avatar>
                    <Styled.AuthorInfo>
                        <Styled.FlexWrapper>
                            <p>
                                <Link>
                                    <b>Đặng Nguyễn Ngọc Trinh</b>
                                </Link>
                            </p>
                            <p>-</p>
                            <p>Bác sĩ</p>
                        </Styled.FlexWrapper>
                        <Styled.FlexWrapper>
                            <p>3 hours ago</p>
                            <p>
                                <FaMapMarkerAlt /> <b>Hà Nội</b>
                            </p>
                        </Styled.FlexWrapper>
                        <Styled.Content>Hà Nội xịn của tao, sao cớ sao cơ sao cơ :3</Styled.Content>
                    </Styled.AuthorInfo>
                </Styled.Author>
                <Styled.ButtonWrapper>
                    <ButtonFollow />
                </Styled.ButtonWrapper>
            </Styled.Header>
            <Styled.Body></Styled.Body>
        </Styled.Container>
    )
}

export default VideoFeedItem
