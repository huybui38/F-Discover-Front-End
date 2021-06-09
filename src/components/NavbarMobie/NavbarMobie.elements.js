import styled from 'styled-components'

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 50px;
    padding: 0 ${(props) => props.padding || '18px'};
    background-color: ${(props) => props.backgroundColor || '#fff'};

    font-size: 14px;
    font-weight: 500;
    text-shadow: 1px 1px 2px #000;

    color: ${(props) => props.textColor || '#050505'};

    & div {
        display: flex;
        align-items: center;
    }

    & .sidebar--disable {
        transform: translateX(-100%);
    }
    & .sidebar--disable > .sidebar__overlay {
        display: none;
    }
`
export const Logo = styled.img`
    height: 30px;
    padding: 0 8px;
`

export const LoginWrapper = styled.div`
    & a {
        text-decoration: none;
        color: ${(props) => props.textColor || '#050505'};
        font-weight: 500;
        text-shadow: 1px 1px 2px #000;
    }
`

export const SidebarWrapper = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 3;

    width: 100%;
    border-top: 2px solid #59abae;

    transform: translateX(0);
    transition: all 0.3s linear;
`
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 200%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
`
