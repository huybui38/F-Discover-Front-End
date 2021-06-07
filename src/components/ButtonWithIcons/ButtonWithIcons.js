import PropTypes from 'prop-types'

import { Wrapper } from './Button.element'

const propType = {
    width: PropTypes.string,
    padding: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    startIcon: PropTypes.elementType,
    endIcon: PropTypes.elementType,
    children: PropTypes.any,
}

export const ButtonWithIcons = (props) => {
    const { children, startIcon: StartIcon, endIcon: EndIcon, ...rest } = props
    console.log(EndIcon)
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
