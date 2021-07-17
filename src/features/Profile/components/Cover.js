import { useRef } from 'react'

import { RiUploadCloud2Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

import { EmptyIconButton } from '../../../components/ButtonWithIcons'
import { Typography } from '../../../components/Typography'

import CoverUploadIcon from '../../../assets/cover-upload-icon.jpg'
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
    bottom: 2rem;
    background-color: white;
    width: 130px;
    height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    z-index: 1;
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
    let { profileID } = useParams()
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
        <div style={{ position: 'relative', width: '100%' }}>
            {!profileID ? (
                <StyledUpLoadCover onClick={uploadClickHandler}>
                    <img src={CoverUploadIcon} style={{ width: '20px', height: '20px' }}></img>
                    <Typography>Edit your cover</Typography>
                    <StyledInputFile
                        type="file"
                        style={{ display: 'none' }}
                        ref={uploadCoverRef}
                        accept=".jpeg,.png,.jpg"
                        onChange={uploadHandler}
                    />
                </StyledUpLoadCover>
            ) : (
                ''
            )}
            <StyledImage src={details.coverUrl}></StyledImage>
        </div>
    )
}
