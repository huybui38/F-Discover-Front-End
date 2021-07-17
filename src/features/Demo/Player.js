import React from 'react'

import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import VideoPlayer from '../../components/Player/Video'

import image from '../../assets/demo_player.jpeg'
import videoDemo from '../../assets/demo_video.mp4'
import videoDemo2 from '../../assets/demo_video_2.mp4'
import videoDemo3 from '../../assets/demo_video_3.mp4'

const Card = styled.div`
    width: calc(100% * (1 / 3));
`
const DemoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    flex-direction: row;
    width: 720px;
`
export const Player = () => {
    let { params } = useParams()
    console.log(params)
    return (
        <div>
            <DemoContainer>
                <Card>
                    <VideoPlayer src={videoDemo}></VideoPlayer>
                </Card>
                <Card>
                    <VideoPlayer src={videoDemo2}></VideoPlayer>
                </Card>
                <Card>
                    <VideoPlayer src={videoDemo3}></VideoPlayer>
                </Card>
            </DemoContainer>
            <h2>PROFILE PAGE</h2>
        </div>
    )
}
