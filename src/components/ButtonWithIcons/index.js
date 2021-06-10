import PropTypes from 'prop-types'

import { Wrapper } from './Button.element'

const propType = {
    width: PropTypes.string,
    padding: PropTypes.string,
    background_color: PropTypes.string,
    text_color: PropTypes.string,
    startIcon: PropTypes.elementType,
    endIcon: PropTypes.elementType,
    animation: PropTypes.bool,
    to: PropTypes.string,
    children: PropTypes.any,
}

export const ButtonWithIcons = (props) => {
    const { children, startIcon: StartIcon, endIcon: EndIcon, ...rest } = props
    return (
        <Wrapper {...rest}>
            {StartIcon ? <StartIcon /> : null}
            {children}
            {EndIcon ? <EndIcon /> : null}
        </Wrapper>
    )
}

ButtonWithIcons.propTypes = propType
export default ButtonWithIcons
