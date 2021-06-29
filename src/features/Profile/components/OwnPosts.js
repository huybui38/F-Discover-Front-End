import propTypes from 'prop-types'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

import TestCardImg from '../../../assets/demo_profile_1.png'

const StyledMedia = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    object-fit: cover;
`

const Card = styled.div`
    position: relative;
    display: block;
    width: calc(100% * (1 / 3));
    padding-top: 66.67%;
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
const Post = (props) => {
    return (
        <Card>
            {/* <video
                style={{ width: '100%', height: '100%' }}
                className="tWeCl"
                crossOrigin="anonymous"
                playsinline=""
                poster="https://instagram.fsgn4-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/207604050_914165299159817_4779737220939036312_n.jpg?tp=1&amp;_nc_ht=instagram.fsgn4-1.fna.fbcdn.net&amp;_nc_cat=105&amp;_nc_ohc=3LHGjI1VZwIAX8mkUKo&amp;edm=AAeKFY8BAAAA&amp;ccb=7-4&amp;oh=eb291a44317c4a7676ba74dc13b08ce2&amp;oe=60D8D601&amp;_nc_sid=c982ba"
                preload="none"
                type="video/mp4"
                src="blob:https://www.instagram.com/4f4cbc15-96d5-411d-a3a5-d1a94917bef8"
            ></video> */}
            <StyledMedia src={props.src} />
        </Card>
    )
}
Post.propTypes = {
    src: propTypes.object,
}
export default function OwnPosts() {
    return (
        <OwnPostWrapper>
            <Post src={TestCardImg} />
            <Post src={TestCardImg} />
            <Post src={TestCardImg} />
            <Post src={TestCardImg} />
        </OwnPostWrapper>
    )
}
