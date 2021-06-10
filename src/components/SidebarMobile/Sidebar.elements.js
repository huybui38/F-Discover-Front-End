import styled from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    width: ${(props) => props.width || '250px'};
    height: 100vh;

    font-size: 16px;
    font-weight: 500;

    color: #000;
    text-shadow: none;
    background-color: #fff;
`
export const GroupSocialBtn = styled.div`
    justify-content: center;
    width: 100%;
    height: 60px;

    border-bottom: 1px solid #000;
`

export const SidebarList = styled.ul`
    width: 100%;
    list-style: none;

    & .sidebar__item--active {
        background-color: #59abae;
        color: #fff;
    }
`

export const SidebarItem = styled.li`
    display: flex;
    align-items: center;

    width: 100%;
    margin: 8px 0;
    padding: 16px ${(props) => props.padding || '18px'};

    & span {
        margin: 0 16px;
    }

    &:hover,
    &:active {
        cursor: pointer;
        background-color: #59abae;
        color: #fff;
    }
`
