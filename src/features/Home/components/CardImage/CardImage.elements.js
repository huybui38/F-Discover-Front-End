import styled from 'styled-components'

export const CardWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 450px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Card = styled.div`
    position: relative;

    width: 180px;
    height: 250px;
`
export const Title = styled.div`
    position: absolute;
    top: -40px;
    left: 0;
    z-index: 1;

    width: 100%;

    color: #fff;

    & span {
        text-shadow: 1px 1px 2px #050505;
        font-size: 12px;
    }
`

export const GroupStar = styled.div`
    display: flex;
    text-shadow: 1px 1px 2px #050505;

    & .star {
        color: #c2d2cf;
        margin-right: 4px;
    }

    & .star__checked {
        color: #fff;
    }
`

export const Image = styled.div`
    position: relative;

    width: 100%;
    height: 100%;
    border-radius: 10px;

    background-image: url(${(props) => props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const IconBookmark = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 25px;
    height: 25px;
    border-radius: 50%;

    text-shadow: 1px 1px 2px #050505;

    color: #c2d2cf;
    background-color: #fff;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`
