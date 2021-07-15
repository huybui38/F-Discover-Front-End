import { useEffect, useState } from 'react'

import propTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

import VideoPlayer from '../../../components/Player/Video'

import videoDemo from '../../../assets/demo_video.mp4'
import videoDemo2 from '../../../assets/demo_video_2.mp4'
import videoDemo3 from '../../../assets/demo_video_3.mp4'
import { Error, Success } from '../../../helpers/notify'
import { getPostsByID } from '../../../services/user/profile'
import { fetchPosts, setLoading } from '../profileSlice'

const Card = styled.div`
    width: calc(100% * (1 / 3));
`
const OwnPostWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    flex-direction: row;
    width: 720px;
    ${down('lg')} {
        width: 100%;
        /* height: px; */
        /* width: 1020px; */
    }
`

export default function OwnPosts() {
    const userID = useSelector((state) => state.auth.userID)
    const posts = useSelector((state) => state.profile.posts)
    const dispatch = useDispatch()
    let { profileID } = useParams()
    useEffect(() => {
        if (userID !== -1) {
            dispatch(fetchPosts(profileID ? profileID : userID))
        }
    }, [userID, dispatch, profileID])
    const videos = posts.map((element) => (
        <Card key={element.id}>
            <VideoPlayer src={element.videoUrl} poster={element.thumbnailUrl}></VideoPlayer>
        </Card>
    ))
    return <OwnPostWrapper>{videos}</OwnPostWrapper>
}
