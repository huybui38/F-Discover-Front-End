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
    top: -4rem;
    left: 0;
    z-index: 1;

    width: 100%;

    color: #fff;

    & span {
        font-size: 1.2rem;
    }
`

export const GroupStar = styled.div`
    display: flex;

    & .star {
        color: #c2d2cf;
        margin-right: 0.4rem;
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
    top: 2rem;
    right: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;

    color: #c2d2cf;
    background-color: #fff;

    &:hover {
        cursor: pointer;
        background-color: red;
    }
`
