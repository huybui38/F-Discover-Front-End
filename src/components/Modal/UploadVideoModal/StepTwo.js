import { useEffect } from 'react'

import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { setUpdatePostStatus, updatePost } from '../../../features/Profile/profileSlice'
import { Error, Success } from '../../../helpers/notify'
import useInput from '../../../hooks/useInput'
import { fetchLocationAsync } from '../../../services/app/appSlice'
import { Button } from '../../Button'
import { Dropdown } from '../../Input/Dropdown'
import TextFieldInput from '../../Input/TextField'
import { SimpleCircleLoader } from '../../Loading/Loader'

const StyledDropdown = styled(Dropdown)`
    width: 100px;
    display: none;
`
const StyledVideoInput = styled(TextFieldInput)`
    font-size: 30px;
`
export const StepTwo = ({ videoID, onSuccess }) => {
    const [location, locationHandler, setLocation] = useInput('')
    const [content, contentHandler, setContent] = useInput('')
    const locationsState = useSelector((state) => state.app.locations)
    const fetchStatus = useSelector((state) => state.profile.status.updatePost)
    const dispatch = useDispatch()
    useEffect(() => {
        if (locationsState.status === 'idle') {
            dispatch(fetchLocationAsync())
        }
    }, [locationsState.status, dispatch])
    const locations = locationsState.data?.map((element) => {
        return {
            value: element.id,
            text: element.name,
        }
    })
    useEffect(() => {
        if (fetchStatus == 'succeeded') {
            Success('Cập nhật thành công')
            setContent('')
            setLocation('')
            dispatch(setUpdatePostStatus('idle'))
            onSuccess()
        }
    }, [fetchStatus, setContent, setLocation, dispatch, onSuccess])
    const saveHandler = () => {
        if (!content) return Error('Chọn địa điểm!')
        const data = { videoID, content, location }
        dispatch(updatePost(data))
    }
    return (
        <>
            <h1>Step two</h1>
            <StyledVideoInput
                label="Tên video"
                handleChange={contentHandler}
                value={content}
            ></StyledVideoInput>
            <StyledDropdown options={locations} handlerChange={locationHandler} />
            <Button onClick={saveHandler}>Save</Button>
            {fetchStatus == 'loading' ? <SimpleCircleLoader /> : null}
        </>
    )
}
StepTwo.propTypes = {
    videoID: PropTypes.string,
    onSuccess: PropTypes.func,
}
