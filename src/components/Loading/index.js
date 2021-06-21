import propTypes from 'prop-types'

import Loader from './Loader'
import { Overlay } from './Overlay'

const Loading = (props) => {
    return props.isLoading ? (
        <Overlay>
            <Loader />
        </Overlay>
    ) : (
        ''
    )
}
Loading.propTypes = {
    isLoading: propTypes.bool,
}
export { Loading }
