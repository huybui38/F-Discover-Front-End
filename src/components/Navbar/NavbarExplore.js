import styled from 'styled-components'

import Fdiscover from '../../assets/F-discover.png'
import SearchBar from './NavbarExplore/SearchBar'
import TopLeft from './NavbarExplore/TopLeft'

const NavBar = styled.div`
    padding: calc(1vw + 1vh);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bfbebe;
`

const Logo = styled.img`
    margin: auto;
    width: calc(6.7vw + 10vh);
    height: auto;
`

function NavBarExplore() {
    return (
        <NavBar>
            <a href="#">
                <Logo src={Fdiscover} />
            </a>
            <SearchBar />
            <TopLeft />
        </NavBar>
    )
}

export default NavBarExplore
