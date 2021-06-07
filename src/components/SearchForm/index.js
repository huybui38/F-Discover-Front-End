import React from 'react'

import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'

import { Wrapper, Input, IconSearch } from './SearchForm.elements'

export const SearchForm = () => {
    return (
        <Wrapper>
            <Input
                className="home__search-form"
                type="text"
                placeholder="Search..."
                name="search-form"
            ></Input>
            <IconSearch>
                <FaSearch />
            </IconSearch>
        </Wrapper>
    )
}

SearchForm.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    fontSize: PropTypes.string,
    borderColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default SearchForm
