import propTypes from 'prop-types'
import styled from 'styled-components'

const DropdownContainer = styled.label`
    position: relative;
`
const Select = styled.select`
    -webkit-appearance: none;
    padding: 7px 40px 7px 12px;
    width: 100%;
    border: 1px solid #e8eaed;
    background: #fff;
    box-shadow: 0 1px 3px -2px #9098a9;
    cursor: pointer;
    font-family: inherit;
    transition: all 150ms ease;
    &:focus {
        outline: none;
        border-color: #07f;
        box-shadow: 0 0 0 2px rgb(0 119 255 / 20%);
    }
`

const StyledOption = styled.option`
    color: #223254;
    &[value='DEFAULT'][disabled] {
        display: none;
    }
`
const StyledLabel = styled.label`
    font-size: 0.8rem;
`
export const Dropdown = ({ options, handlerChange, className, label = 'DEFAULT' }) => {
    const map = options.map((element, index) => (
        <StyledOption key={index} value={element.value}>
            {element.text}
        </StyledOption>
    ))
    return (
        <DropdownContainer className={className}>
            <StyledLabel>{label}</StyledLabel>
            <Select onChange={handlerChange} defaultValue={'DEFAULT'}>
                <StyledOption value="DEFAULT" disabled hidden>
                    Select option
                </StyledOption>
                {map}
            </Select>
        </DropdownContainer>
    )
}
Dropdown.propTypes = {
    options: propTypes.array,
    handlerChange: propTypes.func,
    className: propTypes.any,
    label: propTypes.string,
}
