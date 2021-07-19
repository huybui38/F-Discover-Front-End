import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLabel = styled.label`
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
    box-shadow: 0 1px 3px -2px #9098a9;
    &:focus {
        outline: none;
        border-color: #409eff;
    }
`
function TextFieldInput({ handleChange, value, label, className }) {
    return (
        <Container className={className}>
            <StyledLabel>{label}</StyledLabel>
            <StyledTextInput type="text" onChange={handleChange} value={value} />
        </Container>
    )
}

TextFieldInput.propTypes = {
    handleChange: PropTypes.func,
    value: PropTypes.any,
    className: PropTypes.any,
    label: PropTypes.string,
}

export default TextFieldInput
