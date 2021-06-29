import { down } from 'styled-breakpoints'
import styled from 'styled-components'

import TestImg from '../../../assets/test-profile-img.png'

const StyledImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    ${down('lg')} {
        position: relative;
    }
`
export default function Cover() {
    return <StyledImage src={TestImg}></StyledImage>
}
