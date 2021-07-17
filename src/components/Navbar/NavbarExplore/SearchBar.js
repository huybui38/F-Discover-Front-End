import react, { useState } from 'react'

import styled from 'styled-components'

const Search = styled.input`
    margin: auto;
    width: 82%;
    padding: calc(0.5vw + 1vh) calc(1vw + 1vh);
    font-size: 0.5vw + 1.5vh;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 95% center;
    border-radius: 50px;
    border: 1px solid #575756;
    transition: all 250ms ease-in-out;

    &:placeholder {
        color: #a7a4a4;
    }

    &:hover,
    :focus {
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid #575756;
        border-radius: 0;
        background-position: 98% center;
    }
`
const SearchBarContainer = styled.div`
    width: 40%;
`

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('')

    const changeHandler = (e) => {
        e.preventDefault()
        setSearchQuery(e.target.value)
    }

    // const searchInformation = () => {}

    console.log('value: ', searchQuery)
    return (
        <SearchBarContainer>
            <Search type="text" placeholder="Search" value={searchQuery} onChange={changeHandler} />
        </SearchBarContainer>
    )
}

export default SearchBar
