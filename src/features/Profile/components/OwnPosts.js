import { useEffect } from 'react'

import propTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

import VideoPlayer from '../../../components/Player/Video'

import videoDemo from '../../../assets/demo_video.mp4'
import videoDemo2 from '../../../assets/demo_video_2.mp4'
import videoDemo3 from '../../../assets/demo_video_3.mp4'
import { Error, Success } from '../../../helpers/notify'
import { getPostsByID } from '../../../services/user/profile'
import { setLoading } from '../profileSlice'

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
    const dispatch = useDispatch()
    useEffect(() => {
        if (userID !== -1) {
            dispatch(setLoading(true))
            getPostsByID(userID, 1, 10).then((result) => {
                dispatch(setLoading(false))
                if (!result) return Error('ĐÃ có lỗi xảy ra')
                // console.log(result)
            })
        }
    }, [userID, dispatch])
    return (
        <OwnPostWrapper>
            <Card>
                <VideoPlayer src={videoDemo}></VideoPlayer>
            </Card>
            <Card>
                <VideoPlayer src={videoDemo2}></VideoPlayer>
            </Card>
            <Card>
                <VideoPlayer src={videoDemo3}></VideoPlayer>
            </Card>
            {/* <Post src={TestCardImg} /> */}
            {/* <Post src={TestCardImg} /> */}
            {/* <Post src={TestCardImg} /> */}
        </OwnPostWrapper>
    )
}
