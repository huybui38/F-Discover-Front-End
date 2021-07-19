import PropTypes from 'prop-types'

import Facebook from './Facebook'
import Google from './Google'
import Phone from './Phone'
import Zalo from './Zalo'
import { makeStyleIcon } from './style'

const propsType = {
    width: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string,
}
export const GoogleIcon = (props) => makeStyleIcon(Google, props)
export const FacebookIcon = (props) => makeStyleIcon(Facebook, props)
export const PhoneIcon = (props) => makeStyleIcon(Phone, props)
export const ZaloIcon = (props) => makeStyleIcon(Zalo, props)

PhoneIcon.propTypes = propsType
GoogleIcon.propTypes = propsType
FacebookIcon.propTypes = propsType
