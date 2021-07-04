import propTypes from 'prop-types'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

import Video from '../../../components/Video'

import TestCardImg from '../../../assets/demo_profile_1.jpeg'

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
    return (
        <OwnPostWrapper>
            <Card>
                <Video src={TestCardImg} />
            </Card>
            <Card>
                <Video src={TestCardImg} />
            </Card>
            <Card>
                <Video src={TestCardImg} />
            </Card>
            <Card>
                <Video src={TestCardImg} />
            </Card>
            {/* <Post src={TestCardImg} /> */}
            {/* <Post src={TestCardImg} /> */}
            {/* <Post src={TestCardImg} /> */}
        </OwnPostWrapper>
    )
}
