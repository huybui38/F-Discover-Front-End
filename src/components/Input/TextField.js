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
function TextFieldInput(props) {
    return (
        <Container>
            <StyledLabel>Display name</StyledLabel>
            <StyledTextInput type="text" />
        </Container>
    )
}

TextFieldInput.propTypes = {}

export default TextFieldInput
