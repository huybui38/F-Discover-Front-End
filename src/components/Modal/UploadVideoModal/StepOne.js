import propTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import { MdFileUpload } from 'react-icons/md'
import styled, { css, keyframes } from 'styled-components'

import { Button } from '../../Button'
import { Typography } from '../../Typography'

const rotate = keyframes`
  from {
    border-radius: 20px;
  }

  to {
    border-radius: 50%;
  }
`
const pulse = keyframes`
  from {
    transform: scale(1);
    border-radius: 50%;
  }

  to {
    border-radius: 50%;
    transform: scale(1.3);
    background-color:#01B3A750;
  }
`
const UploadLogo = styled.div`
    padding: 10px;
    background-color: #9b999e60;
    border-radius: 20px;
    height: 50px;
    ${(props) =>
        props.isDragging &&
        css`
            /* animation: 0.3s linear;
        animation-fill-mode: forwards; */
            animation: ${rotate}, ${pulse};
            animation-duration: 0.3s, 0.4s;
            /* animation-fill-mode: forwards;
        animation-timing-function: linear; */
            animation-fill-mode: forwards, unset;
            animation-timing-function: linear, linear;
            animation-direction: alternate;
            animation-iteration-count: 1, infinite;
            animation-play-state: running;
            animation-delay: 0s, 0.3s;
        `}
`
const ButtonContainer = styled.div`
    display: flex;
    /* flex-direction: row-reverse; */
`
const BrowseButton = styled(Button)`
    background-color: ${(props) => props.theme.color.primary};
    padding: 5px;
`
const MainText = styled(Typography)`
    padding: 10px;
`
const SecondText = styled(Typography)`
    font-size: 0.7rem;
    padding-bottom: 10px;
`
export const StepOne = ({ onDrop }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    const saveHandler = () => {}
    return (
        <>
            <UploadLogo {...getRootProps()} isDragging={isDragActive}>
                <input {...getInputProps()} />
                <MdFileUpload color="#626164" size={50} />
            </UploadLogo>
            <MainText>Drag & drop file you want to upload</MainText>
            <SecondText>Maximum 15mb</SecondText>
            <ButtonContainer onClick={saveHandler}>
                <BrowseButton center>Browse</BrowseButton>
            </ButtonContainer>
        </>
    )
}
StepOne.propTypes = {
    onDrop: propTypes.func,
}
