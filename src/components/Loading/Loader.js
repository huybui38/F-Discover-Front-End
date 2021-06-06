import Spinner from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

export default function Loader() {
    return (
        <Spinner
            type="BallTriangle"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={0} //3 secs
        />
    )
}
export const PuffLoader = () => {
    return <Loader type="Puff" color="#00BFFF" height={100} width={100} />
}
