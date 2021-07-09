import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLabel = styled.label`
    /* font-weight: 200; */
    font-size: 0.8rem;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledTextInput = styled.input`
    border: 1px solid #dcdfe6;
    padding: 3px;
    line-height: 1.5rem;
    &:focus {
        outline: none;
        border-color: #409eff;
    }
`
function TextFieldInput({ handleChange, value, label }) {
    return (
        <Container>
            <StyledLabel>{label}</StyledLabel>
            <StyledTextInput type="text" onChange={handleChange} value={value} />
        </Container>
    )
}

TextFieldInput.propTypes = {
    handleChange: PropTypes.func,
    value: PropTypes.any,
    label: PropTypes.string,
}

export default TextFieldInput
