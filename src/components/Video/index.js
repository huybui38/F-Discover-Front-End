import { useState } from 'react'

import propTypes from 'prop-types'
import styled from 'styled-components'

import { PauseIcon, ResumeIcon } from '../Icons/Video'
import { MutedIcon, UnmutedIcon } from '../Icons/Volumn'

const VideoContainer = styled.div`
    width: 100%;
    padding-top: 177.77%;
    position: relative;
    height: 0px;
    user-select: none;
`
const Player = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
`
const BaseVolumeButton = styled.div`
    position: absolute;
    right: 0.6em;
    bottom: 0.45em;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
`
const BasePlayButton = styled.div`
    position: absolute;
    left: 50%;
    margin-left: -1.5rem;
    margin-bottom: -1.5rem;
    bottom: 50%;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
`
const VolumeButton = function () {
    const [isMuted, setIsMuted] = useState(true)
    return (
        <BaseVolumeButton onClick={() => setIsMuted(!isMuted)}>
            {isMuted ? <MutedIcon /> : <UnmutedIcon />}
        </BaseVolumeButton>
    )
}
const PlayButton = function () {
    const [isPaused, setIsPaused] = useState(true)
    return (
        <BasePlayButton onClick={() => setIsPaused(!isPaused)}>
            {isPaused ? <ResumeIcon /> : <PauseIcon />}
        </BasePlayButton>
    )
}
function Video(props) {
    return (
        <VideoContainer>
            <Player src={props.src}></Player>
            <VolumeButton></VolumeButton>
            <PlayButton></PlayButton>
        </VideoContainer>
    )
}
Video.propTypes = {
    src: propTypes.string,
}

export default Video
