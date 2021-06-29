import styled from 'styled-components'

import { Typography } from '../../../components/Typography'

const WrapperText = styled(Typography)`
    padding: 0 1rem;
`
export default function ProfileDescription() {
    return (
        <WrapperText>
            Đôi khi, không cẩn thận biết một số chuyện, mới phát hiện ra rằng những điều bản thân để
            tâm lại nực cười đến thế.
        </WrapperText>
    )
}
