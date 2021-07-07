import { useRef } from 'react'

import { RiUploadCloud2Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

import { EmptyIconButton } from '../../../components/ButtonWithIcons'

import TestImg from '../../../assets/test-profile-img.png'
import { Error, Success } from '../../../helpers/notify'
import apiCaller from '../../../utils/apiCaller'
import { setCover, setLoading } from '../profileSlice'

const StyledImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    ${down('lg')} {
        position: relative;
    }
`
const StyledUpLoadCover = styled(EmptyIconButton)`
    position: absolute;
    right: 3rem;
    bottom: 0;
`
const StyledInputFile = styled.input``
export default function Cover() {
    const dispatch = useDispatch()
    const details = useSelector((state) => state.profile.bioDetail)
    const uploadCoverRef = useRef(null)
    const uploadClickHandler = () => {
        if (uploadCoverRef.current) {
            uploadCoverRef.current.click()
        }
    }
    const uploadHandler = (e) => {
        if (e.target.files.length === 0) {
            return
        }
        const targetImg = e.target.files[0]
        const formData = new FormData()
        formData.append('cover', targetImg)
        dispatch(setLoading(true))
        apiCaller
            .postFormData('/user/upload-cover', formData)
            .then((result) => {
                dispatch(setCover(result.data.coverUrl))
                Success('Cập nhật thành công')
                dispatch(setLoading(false))
            })
            .catch((error) => {
                console.log(error)
                Error('Cập nhật thất bại')
                dispatch(setLoading(false))
            })
    }
    return (
        <div style={{ position: 'relative' }}>
            <StyledUpLoadCover onClick={uploadClickHandler}>
                <RiUploadCloud2Line size={55} color="white" />
                <StyledInputFile
                    type="file"
                    style={{ display: 'none' }}
                    ref={uploadCoverRef}
                    accept=".jpeg,.png,.jpg"
                    onChange={uploadHandler}
                />
            </StyledUpLoadCover>
            <StyledImage src={details.coverUrl}></StyledImage>
        </div>
    )
}
