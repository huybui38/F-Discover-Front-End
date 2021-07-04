import { useRef, useState } from 'react'

import propTypes from 'prop-types'
import styled from 'styled-components'

import { PauseIcon, ResumeIcon } from '../Icons/Video'
import { MutedIcon, UnmutedIcon } from '../Icons/Volume'

const VideoContainer = styled.div`
    width: 100%;
    padding-top: 177.77%;
    position: relative;
    height: 0px;
    user-select: none;
`
const Player = styled.video`
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
const VolumeButton = function (props) {
    const [isMuted, setIsMuted] = useState(true)
    const handleClick = () => {
        setIsMuted(!isMuted)
        props.toggleHandler()
    }
    return (
        <BaseVolumeButton onClick={handleClick}>
            {isMuted ? <MutedIcon /> : <UnmutedIcon />}
        </BaseVolumeButton>
    )
}
const PlayButton = function (props) {
    const [isPaused, setIsPaused] = useState(true)
    const handleClick = () => {
        setIsPaused(!isPaused)
        props.toggleHandler()
    }
    return (
        <BasePlayButton onClick={handleClick}>
            {isPaused ? <ResumeIcon /> : <PauseIcon />}
        </BasePlayButton>
    )
}
VolumeButton.propTypes = {
    toggleHandler: propTypes.func,
}
PlayButton.propTypes = {
    toggleHandler: propTypes.func,
}
function VideoPlayer(props) {
    const refPlayer = useRef(null)
    const playVideoHandler = () => {
        if (refPlayer.current != null) {
            if (refPlayer.current.paused === true) {
                refPlayer.current.play()
            } else {
                refPlayer.current.pause()
            }
        }
    }
    const muteVideoHandler = () => {
        if (refPlayer.current != null) {
            refPlayer.current.muted = !refPlayer.current.muted
        }
    }
    return (
        <VideoContainer>
            <Player src={props.src} ref={refPlayer} muted={true}></Player>
            <VolumeButton toggleHandler={muteVideoHandler}></VolumeButton>
            <PlayButton toggleHandler={playVideoHandler}></PlayButton>
        </VideoContainer>
    )
}
VideoPlayer.propTypes = {
    src: propTypes.string,
}

export default VideoPlayer
