import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Typography } from '../../../components/Typography'

import { getBioProfile } from '../profileSlice'

const WrapperText = styled(Typography)`
    padding: 0 1rem;
`
export default function ProfileDescription() {
    const details = useSelector(getBioProfile)
    return <WrapperText>{details.quote ? details.quote : ''}</WrapperText>
}
