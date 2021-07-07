import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Typography } from '../../../components/Typography'

const WrapperText = styled(Typography)`
    padding: 0 1rem;
`
export default function ProfileDescription() {
    const details = useSelector((state) => state.profile.bioDetail)
    return <WrapperText>{details.quote ? details.quote : 'Chưa cập nhật'}</WrapperText>
}
