/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

import { StyledButton } from './Button'

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
Button.propTypes = propsType
export { Button, ButtonWrapper }
