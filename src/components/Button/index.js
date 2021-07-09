/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

import { StyledButton, StyledCircleButton } from './Button'

const propsType = {
    fullWidth: PropTypes.bool,
    padding: PropTypes.string,
    center: PropTypes.bool,
}
const ButtonWrapper = (Component, props) => {
    const { children, ...rest } = props
    return <Component {...rest}>{children}</Component>
}

const Button = (props) => ButtonWrapper(StyledButton, props)
const CircleButton = (props) => ButtonWrapper(StyledCircleButton, props)
Button.propTypes = propsType
export { Button, ButtonWrapper, CircleButton }
